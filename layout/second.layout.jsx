import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

let Breadcrumbs = [
    { path: "reserve", name: "رزور نوبت" },
    { path: "panel", name: "پنل" },
    { path: "my-reserve", name: "رزور های من" },
    { path: "doctor", name: "پزشک" },
    { path: "category", name: "دسته بندی ها" },
    { path: "profile", name: "پروفایل" },
    { path: "new", name: "مدیرت سایت" },
    { path: "home", name: "صفحه اصلی" },
]

function SecondLayout({ children }) {
    const [change, setChange] = React.useState(new Date());

    let router = useRouter();

    let lastB = Breadcrumbs.find(i => i.path == router.pathname.split("/").at(-1))
    let sectB = Breadcrumbs.find(i => i.path == router.pathname.split("/").at(2))
    let firstB = Breadcrumbs.find(i => i.path == router.pathname.split("/").at(1))

    React.useEffect(() => { }, [change]);

    // console.log(router.pathname.split("/").at(1));

    function Logout() {
        localStorage.removeItem("access-token");
        setChange(new Date());
        router.reload();
        document.getElementById("logout-m").checked = false
    }


    return (
        <>
            <Navbar bg="#e7faff" typeLayout="dashboard" setChange={setChange} change={change} Logout={Logout} />
            <div className="bg-[#f4f8fb]">
                <nav className="rounded-md w-full pt-2 bres">
                    <ol className="list-reset flex text-sm mt-1 mr-8">
                        <li><p className="text-blue-600 hover:text-blue-700">{firstB?.path == lastB?.path ? "کاربر" : firstB?.name}</p></li>
                        <li><span className="text-gray-500 mx-2">/</span></li>
                        <li hidden={sectB?.path == lastB?.path}><p className="text-[#244fef]">{sectB?.name}</p></li>
                        <li hidden={sectB?.path == lastB?.path || !sectB?.path}><p className="text-gray-500 mx-2">/</p></li>
                        <li className="active">{lastB?.name}</li>
                    </ol>
                </nav>
                {children}
            </div>
        </>
    );
}

export default SecondLayout;