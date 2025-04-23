import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-gray-800 py-8">
            <div className="container mx-auto">
                <div className="w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
                    <aside className="grid-flow-col items-center">
                        <p className="text-base font-normal text-center">Copyright &copy; {new Date().getFullYear()} SURAYA AHLAM - All right reserved</p>
                    </aside>
                    <nav className="justify-self-center md:place-self-center md:justify-self-end">
                        <div className="flex items-center gap-5">
                            <a
                                href="https://github.com/surayaahlam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:scale-110">
                                <FaGithub size={25} /></a>
                            <a
                                href="https://www.linkedin.com/in/surayaahlam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:scale-110">
                                <FaLinkedinIn size={25} /></a>
                            <a
                                href="https://discord.com/users/surayaahlam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:scale-110">
                                <FaDiscord size={25} /></a>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
    );
};

export default Footer;