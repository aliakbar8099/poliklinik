import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function SecondLayout({ children }) {
    let router = useRouter();

    React.useEffect(() => {
        if(!localStorage.getItem("access-token")){
            router.push("/")
            document.getElementById("modalAuth").checked = true
            return () => {
                toast.info("شما وارد حساب نشده اید")
                document.getElementById("modalAuth").checked = true
            }
        }
    }, [])

    return (
        <>
            <Navbar bg="#D3ECEB" typeLayout="dashboard" />
            {children}
        </>
    );
}

export default SecondLayout;