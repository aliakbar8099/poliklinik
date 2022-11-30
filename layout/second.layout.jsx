import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function SecondLayout({ children }) {
    let router = useRouter();

    function Logout() {
        localStorage.removeItem("access-token");
        router.push("/");
    }

    return (
        <>
            <Navbar bg="#fff" typeLayout="dashboard" />
            {children}
            <input type="checkbox" id="logout-m" className="modal-toggle" />
            <label htmlFor="logout-m" className="modal cursor-pointer z-[1030]">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-lg font-bold text-center">آیا میخواهید از حساب خود خارج شوید؟</h3>
                    <div className="flex justify-center items-center mt-5">
                        <label onClick={Logout} className="btn btn-outline btn-error">خارج شدن</label>
                        <label htmlFor="logout-m" className="btn btn-outline btn-info mr-4">بیخال</label>
                    </div>
                </label>
            </label>
        </>
    );
}

export default SecondLayout;