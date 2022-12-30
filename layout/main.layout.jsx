import { useRouter } from "next/router";
import React from "react";
import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function MainLayout({ children }) {
    let router = useRouter();

    function Logout() {
        localStorage.removeItem("access-token");
        router.reload();
        document.getElementById("logout-m").checked = false
    }

    return (
        <>
            <Navbar setChange={children.props.setChange} change={children.props.change} Logout={Logout} />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;