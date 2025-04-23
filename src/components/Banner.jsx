import { Typewriter } from "react-simple-typewriter";
import bannerImg from "../assets/banner.jpg";
import { PiCodeLight, PiDevToLogoLight } from "react-icons/pi";
import { useState } from "react";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Banner = () => {
    const [done, setDone] = useState(false);

    const handleDone = () => {
        setDone(true);
    };
    return (
        <div id="banner" className="container mx-auto py-28">
            <div className="w-11/12 lg:w-10/12 mx-auto">
                <div className="bg-transparent">
                    <div className="flex flex-col lg:flex-row-reverse gap-16 lg:gap-9 p-1 lg:items-center">
                        <div className="lg:w-[45%] flex justify-center items-center lg:pl-10">
                            <div className="relative">
                                <PiDevToLogoLight className="text-primary absolute -left-[80px] -bottom-[40px]" size={50} />
                                <PiCodeLight className="text-primary absolute -right-[55px] -top-[55px]" size={50} />
                                <img className="w-[350px] rounded-2xl border-[6px] border-secondary absolute -left-6 bottom-6" src={bannerImg} alt="" />
                                <div className="w-[350px] rounded-2xl h-[350px] bg-primary"></div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center lg:items-start lg:w-[55%]">
                            <div className="flex flex-col gap-[2px]">
                                <h3 className="text-3xl font-semibold text-center lg:text-left">Hello, It's Me</h3>
                                <h2 className="text-[50px] font-bold text-center lg:text-left">Suraya Ahlam</h2>
                                <h3 className="text-4xl font-semibold text-center lg:text-left">
                                    And I'm {' '}
                                    <span className="text-primary">
                                        <Typewriter
                                            words={[
                                                "A Front-End Focused MERN Stack Developer",
                                                "Building User-Centric Websites",
                                                "Crafting Seamless Web Experiences"
                                            ]}
                                            loop={50}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={3000}
                                            onLoopDone={handleDone}
                                        />
                                    </span>
                                </h3>
                            </div>
                            <div className="flex gap-4 my-6">
                                <a
                                    href="https://github.com/surayaahlam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 border-2 border-primary text-primary rounded-full bg-transparent flex items-center justify-center hover:scale-95 hover:shadow-xl hover:shadow-[#0cbfdf61]">
                                    <FaGithub size={25} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/surayaahlam/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 border-2 border-primary text-primary rounded-full bg-transparent flex items-center justify-center hover:scale-95 hover:shadow-xl hover:shadow-[#0cbfdf61]">
                                    <FaLinkedinIn size={25} />
                                </a>
                                <a
                                    href="https://discord.com/users/surayaahlam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 border-2 border-primary text-primary rounded-full bg-transparent flex items-center justify-center hover:scale-95 hover:shadow-xl hover:shadow-[#0cbfdf61]">
                                    <FaDiscord size={25} />
                                </a>
                            </div>

                            <button className="btn bg-primary text-secondary hover:bg-transparent hover:text-primary font-poppins px-6 py-6 font-bold text-lg border border-primary rounded-md mt-2 shadow-none hover:shadow-xl hover:shadow-[#0cbfdf61]">Download Resume</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;