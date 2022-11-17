import Footer from "/components/common/Footer";
import Navbar from "/components/common/Navbar";

function MainLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

export default MainLayout;