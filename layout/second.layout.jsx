import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function SecondLayout({ children }) {
    return (
        <>
            <Navbar bg="#D3ECEB" />
            {children}
        </>
    );
}

export default SecondLayout;