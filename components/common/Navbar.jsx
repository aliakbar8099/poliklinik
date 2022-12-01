import React from "react";
import Link from "next/link";
import styles from '/styles/Home.module.scss'
import { useRouter } from "next/router";
import TextInput from "./TextInput";
import Register from "../pages/Auth/Auth";
import Auth from "../pages/Auth/Auth";
import { getUser } from "../../services/get-api";

let menus = {
    main: [
        { name: "خانه", path: "/" },
        { name: "کادر درمانی", path: "/staff" },
        { name: "بخش های ما", path: "/parts" },
        { name: "برنامه ما", path: "/progroms" },
        { name: "مجله سلامت", path: "/magazine" },
    ],
    dashboard: [
        { name: "خانه", path: "/" },
        { name: "رزرو نوبت", path: "/reserve" },
    ],
    dashboardLogin: [
        { name: "خانه", path: "/" },
        { name: "رزرو نوبت", path: "/reserve" },
        { name: "رزور های من", path: "/my-reserve" },
        { name: "پروفایل", path: "/profile" },
    ],
    admin: [
        { name: "خانه", path: "/" },
        { name: "ثبت پزشک", path: "/new/doctor" },
        { name: "رزرو نوبت", path: "/reserve" },
        { name: "رزور های من", path: "/my-reserve" },
        { name: "پروفایل", path: "/profile" },
    ],
}

function Navbar({ bg = "#fff", typeLayout = "main", setChange, change, Logout }) {
    const [pageId, setPageId] = React.useState(1);
    const [open, setOpen] = React.useState(false);
    const [login, setLogin] = React.useState(null);
    const [user, setUser] = React.useState(null)
    const route = useRouter();

    React.useEffect(() => {
        setLogin(localStorage.getItem("access-token"));
        getUser().then(res => {
            setUser(res.data);
        })
        return () => {
            setUser(null)
        }
    }, [change])

    const [position, setPosition] = React.useState({
        left: 0,
        width: 0,
        transform: "scale(0)",
        opacity: 0
    })

    function handleENterMouse(e) {
        setPosition({
            ...position,
            left: e.target.offsetLeft + 20,
            width: e.target.offsetWidth - 40,
            transform: "scale(1)",
            opacity: 1
        })
    }

    function handleLeft(e) {
        setPosition({
            ...position,
            transform: "scale(0)",
            opacity: 0,
        })
    }

    return (
        <>
            <navbar style={{ background: bg }} className="flex overflow-hidden w-full px-2 lg:px-[50px] m-auto items-center py-3 fixed lg:sticky top-0 right-0 z-[2010] bg-white">
                <a>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.53748 23.6036H16.2325L21.9371 38.7715L36.1438 0.998047L44.6456 23.6036H50V27.6435H41.8483L36.1437 12.4755L21.937 50.249L13.4353 27.6435H7.53748C7.88232 27.0488 8.08081 26.3592 8.08081 25.6235C8.08081 24.8878 7.88232 24.1982 7.53748 23.6036Z" fill="#00B6BD" />
                        <path d="M4.04004 21.584V29.6639C1.81176 29.6639 -0.00036478 27.852 -0.00036478 25.6239C-0.00036478 23.3959 1.81176 21.584 4.04004 21.584Z" fill="#00CCB3" />
                        <path d="M7.53772 23.604C7.88257 24.1986 8.08105 24.8883 8.08105 25.6239C8.08105 26.3596 7.88257 27.0492 7.53772 27.6439C6.83813 28.8503 5.53328 29.6639 4.04065 29.6639V21.584C5.53318 21.584 6.83802 22.3975 7.53772 23.604Z" fill="#00EED1" />
                    </svg>
                </a>
                <ul className={`${styles.menu} hidden lg:flex mr-14`}>
                    {
                        menus[typeLayout == "main" ? "main" : login ? user?.rol == "admin" ? "admin" : "dashboardLogin" : "dashboard"].map(item => (
                            <li key={item.path} className={route.pathname === item.path ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href={item.path}>{item.name}</Link></li>
                        ))
                    }
                    <span style={position}></span>
                    <span className={styles.line} style={position}></span>
                </ul>
                {
                    !login ?
                        <ul className={`${styles.auth} hidden lg:flex items-center mr-auto`}>
                            <label htmlFor="modalAuth" onClick={() => setPageId(1)} className="cursor-pointer"><a>ورود</a></label>
                            <label htmlFor="modalAuth" onClick={() => setPageId(0)} className="border border-1 border-gray-900 px-4 py-1 mr-4 rounded-[50px] cursor-pointer">عضویت</label>
                        </ul>
                        :
                        typeLayout != "dashboard" ?
                            <Link href="/reserve" className="mr-auto">
                                <button className="btn btnsd btn-outline border-[#0000] hover:bg-[#005974] text-[#005974] items-center mr-auto rounded-[50px]">
                                    <span className="mx-1">
                                        حساب کاربری
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg>
                                </button>
                            </Link>
                            :
                            <>
                                <label htmlFor="logout-m" className="btn border-0 hidden lg:flex btnsd btn-outline btn-error items-center mr-auto rounded-[50px]">
                                    <span className="mx-1">
                                        خروج از حساب
                                    </span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z" />
                                        <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z" />
                                    </svg>
                                </label>
                                <strong className="mr-3">{user?.fullname}</strong>

                            </>
                }
                <div className="dropdown mr-auto block lg:hidden">
                    <label htmlFor="modalAuth" className="btn btn-ghost btn-circle text-[#00B6BD]" dir="ltr">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-person-fill w-[28px] h-[28px]" viewBox="0 0 16 16">
                            <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        </svg>
                    </label>
                </div>
                <div className="dropdown mr-6 block lg:hidden">
                    <button onClick={() => setOpen(!open)} className="btn btn-ghost btn-circle" dir="ltr">
                        <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </button>
                </div>
            </navbar>
            <input type="checkbox" id="modalAuth" className="modal-toggle" />
            <label htmlFor="modalAuth" className="modal cursor-pointer z-[2022] backdrop-blur-sm">
                <label className="modal-box relative z-[2023]" htmlFor="">
                    <Auth {...{ pageId, setPageId, setChange }} />
                </label>
            </label>
            <input type="checkbox" id="logout-m" className="modal-toggle" />
            <label htmlFor="logout-m" className="modal cursor-pointer z-[1050]">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold text-center">آیا میخواهید از حساب خود خارج شوید؟</h3>
                    <div className="flex justify-center items-center mt-5">
                        <label onClick={Logout} className="btn btn-outline btn-error">خارج شدن</label>
                        <label htmlFor="logout-m" className="btn btn-outline btn-info mr-4">بیخال</label>
                    </div>
                </label>
            </label>
            <div className="menu-res fixed left-0 bg-[#fff] w-full h-[80%] z-[1015] rounded-b-[20px]"
                style={{ transition: "0.3s ease", top: open ? 0 : -1200 }}>
                <ul className={`${styles.menuRes} flex flex-col`}>
                    {
                        menus[typeLayout == "main" ? "main" : login ? user?.rol == "admin" ? "admin" : "dashboardLogin" : "dashboard"].map(item => (
                            <li key={item.path}  onClick={() => setOpen(false)}  className={route.pathname === item.path ? styles.active : ""}  ><Link href={item.path}>{item.name}</Link></li>
                        ))
                    }
                </ul>
                <span className="absolute bottom-1 left-[50%] translate-x-[-50%] w-[90px] h-[5px] bg-[#0005] rounded-[20px]"></span>
            </div>
            {open ? <div onClick={() => setOpen(false)} className="fixed transition-all left-0 top-0 bg-[#0005] w-full h-[100%] z-[1014]"></div> : null}
        </>
    );
}

export default React.memo(Navbar);