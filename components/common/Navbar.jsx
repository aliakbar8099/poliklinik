import React from "react";
import Link from "next/link";
import styles from '/styles/Home.module.scss'
import { useRouter } from "next/router";
import TextInput from "./TextInput";
import Register from "../pages/Auth/Auth";
import Auth from "../pages/Auth/Auth";


function Navbar({ bg = "#fff" }) {
    const [pageId, setPageId] = React.useState(0);
    const [open, setOpen] = React.useState(false)
    const route = useRouter();

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
            <navbar style={{background:bg}} className="flex overflow-hidden w-full px-2 lg:px-[50px] m-auto items-center py-3 fixed lg:sticky top-0 right-0 z-[2010] bg-white">
                <a>
                    <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.53748 23.6036H16.2325L21.9371 38.7715L36.1438 0.998047L44.6456 23.6036H50V27.6435H41.8483L36.1437 12.4755L21.937 50.249L13.4353 27.6435H7.53748C7.88232 27.0488 8.08081 26.3592 8.08081 25.6235C8.08081 24.8878 7.88232 24.1982 7.53748 23.6036Z" fill="#00B6BD" />
                        <path d="M4.04004 21.584V29.6639C1.81176 29.6639 -0.00036478 27.852 -0.00036478 25.6239C-0.00036478 23.3959 1.81176 21.584 4.04004 21.584Z" fill="#00CCB3" />
                        <path d="M7.53772 23.604C7.88257 24.1986 8.08105 24.8883 8.08105 25.6239C8.08105 26.3596 7.88257 27.0492 7.53772 27.6439C6.83813 28.8503 5.53328 29.6639 4.04065 29.6639V21.584C5.53318 21.584 6.83802 22.3975 7.53772 23.604Z" fill="#00EED1" />
                    </svg>
                </a>
                <ul className={`${styles.menu} hidden lg:flex mr-14`}>
                    <li className={route.pathname === "/" ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href="/">خانه</Link></li>
                    <li className={route.pathname === "/staff" ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href="/staff">کادر درمانی</Link></li>
                    <li className={route.pathname === "/parts" ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href="/parts">بخش های ما</Link></li>
                    <li className={route.pathname === "/progroms" ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href="/progroms">برنامه ما</Link></li>
                    <li className={route.pathname === "/magazine" ? styles.active : ""} onMouseEnter={handleENterMouse} onMouseLeave={handleLeft} ><Link href="/magazine">مجله سلامت</Link></li>
                    <span style={position}></span>
                    <span className={styles.line} style={position}></span>
                </ul>
                <ul className={`${styles.auth} hidden lg:flex items-center mr-auto`}>
                    <label htmlFor="modalAuth" onClick={()=> setPageId(1)} className="cursor-pointer"><a>ورود</a></label>
                    <label htmlFor="modalAuth" onClick={()=> setPageId(0)}  className="border border-1 border-gray-900 px-4 py-1 mr-4 rounded-[50px] cursor-pointer">عضویت</label>
                </ul>
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
                    <Auth {...{ pageId, setPageId }} />
                </label>
            </label>
            <div className="menu-res fixed left-0 bg-[#fff] w-full h-[80%] z-[1015] rounded-b-[20px]"
                style={{ transition: "0.3s ease", top: open ? 0 : -1200 }}>
                <ul className={`${styles.menuRes} flex flex-col`}>
                    <li onClick={()=> setOpen(false)} className={route.pathname === "/" ? styles.active : ""} ><Link href="/">خانه</Link></li>
                    <li onClick={()=> setOpen(false)} className={route.pathname === "/staff" ? styles.active : ""} ><Link href="/staff">کادر درمانی</Link></li>
                    <li onClick={()=> setOpen(false)} className={route.pathname === "/parts" ? styles.active : ""} ><Link href="/parts">بخش های ما</Link></li>
                    <li onClick={()=> setOpen(false)} className={route.pathname === "/progroms" ? styles.active : ""} ><Link href="/progroms">برنامه ما</Link></li>
                    <li onClick={()=> setOpen(false)} className={route.pathname === "/magazine" ? styles.active : ""} ><Link href="/magazine">مجله سلامت</Link></li>
                </ul>
                <span className="absolute bottom-1 left-[50%] translate-x-[-50%] w-[90px] h-[5px] bg-[#0005] rounded-[20px]"></span>
            </div>
            { open ? <div onClick={() => setOpen(false)} className="fixed transition-all left-0 top-0 bg-[#0005] w-full h-[100%] z-[1014]"></div> : null }
        </>
    );
}

export default React.memo(Navbar);