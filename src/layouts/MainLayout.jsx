import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="font-poppins text-white">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;