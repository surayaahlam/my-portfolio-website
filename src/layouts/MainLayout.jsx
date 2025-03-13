import AboutMe from "../components/AboutMe";
import Banner from "../components/Banner";
import Navbar from "../components/Navbar";
import Skills from "../components/Skills";

const MainLayout = () => {
    return (
        <div className="font-poppins text-white">
            <Navbar></Navbar>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
        </div>
    );
};

export default MainLayout;