import { FaReact, FaNodeJs, FaJsSquare, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiFirebase, SiExpress, SiFramer } from "react-icons/si";

const skills = [
    { name: "React", icon: <FaReact />, color: "text-[rgb(12,192,223)]" },
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-[rgb(12,192,223)]" },
    { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-400" },
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
    { name: "Express.js", icon: <SiExpress />, color: "text-gray-300" },
    { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
    { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-500" },
    { name: "Framer Motion", icon: <SiFramer />, color: "text-red-400" },
];

const Skills = () => {
    return (
        <section id="skills" className="container mx-auto py-16 lg:py-20 scroll-mt-20 lg:scroll-mt-28">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
                <h2 className="text-[42px] font-extrabold text-white text-center mb-8">
                    My <span className="text-primary">Stack</span>
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 p-6 lg:p-8 rounded-xl flex flex-col items-center justify-center shadow-lg transform transition-all hover:scale-105"
                        >
                            <span className={`text-5xl ${skill.color}`}>{skill.icon}</span>
                            <p className="mt-3 text-gray-300">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
