import { useRouter } from "next/router";
import React from "react";
import { toast } from "react-toastify";
import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function SecondLayout({ children }) {
    const [change, setChange] = React.useState(new Date());

    let router = useRouter();

    React.useEffect(() => {}, [change]);

    function Logout() {
        localStorage.removeItem("access-token");
        setChange(new Date());
        router.reload();
        document.getElementById("logout-m").checked = false
    }


    return (
        <>
            <Navbar bg="#e7faff" typeLayout="dashboard" setChange={setChange} change={change} Logout={Logout} />
            {children}
        </>
    );
}

export default SecondLayout;