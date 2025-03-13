import { NavLink } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    const links = <>
        <NavLink
            to="/"
            className={({ isActive }) => `text-[15px] ${isActive ? "font-bold text-primary" : "hover:scale-110"}`}
        >
            Home
        </NavLink>
        <a href="#about" className="text-[15px] hover:scale-110">About Me</a>
        <a href="#skills" className="text-[15px] hover:scale-110">Skills</a>
        <a href="#projects" className="text-[15px] hover:scale-110">Projects</a>
        <a href="#contact" className="text-[15px] hover:scale-110">Contact Me</a>
    </>

    return (
        <div className="py-2 sticky top-0 z-10 bg-secondary">
            <div className="container mx-auto">
                <div className="navbar w-11/12 lg:w-10/12 mx-auto">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="bg-transparent border-none px-2 lg:hidden text-primary">
                                <FaBars size={25} />
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-48 p-3 shadow bg-footer">
                                {links}
                            </ul>
                        </div>
                        <img className="w-[70px]" src={logoImg} alt="logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-5 font-medium">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn bg-primary text-secondary hover:bg-transparent hover:text-primary font-poppins px-6 font-bold text-[15px] border border-primary rounded-md">Resume</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;