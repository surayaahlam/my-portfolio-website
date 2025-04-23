import { NavLink, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";
import { FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [activeSection, setActiveSection] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const sectionIds = ["about", "skills", "education", "projects", "contact"];
        const sections = sectionIds.map((id) => document.getElementById(id));

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                threshold: 0.6, // Adjust this to make activation more or less sensitive
            }
        );

        sections.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    const getLinkClass = (id) =>
        `text-base transition duration-200 ${activeSection === id ? "font-bold text-primary" : "hover:scale-105"}`;

    const links = <>
        {/* <NavLink
            to="/"
            className={({ isActive }) => `text-base ${isActive ? "font-bold text-primary" : "hover:scale-110"}`}
        >
            Home
        </NavLink> */}
        <a href="#about" className={getLinkClass("about")}>
            About Me
        </a>
        <a href="#skills" className={getLinkClass("skills")}>
            Skills
        </a>
        <a href="#education" className={getLinkClass("education")}>
            Education
        </a>
        <a href="#projects" className={getLinkClass("projects")}>
            Projects
        </a>
        <a href="#contact" className={getLinkClass("contact")}>
            Contact Me
        </a>
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
                                className="menu menu-sm dropdown-content rounded-box z-10 mt-3 w-48 p-3 shadow bg-gray-800">
                                {links}
                            </ul>
                        </div>
                        <img onClick={() => navigate("/")} className="w-[70px] cursor-pointer" src={logoImg} alt="logo" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-5 font-medium">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button className="btn bg-primary text-secondary hover:bg-transparent hover:text-primary font-poppins px-6 font-bold text-base border border-primary rounded-md shadow-none">Resume</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;