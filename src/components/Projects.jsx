import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ImCross } from "react-icons/im";

const Projects = () => {
    const projects = useLoaderData();
    const [selectedProject, setSelectedProject] = useState(null);
    const [showAll, setShowAll] = useState(false);

    const techColors = {
        "React": "text-blue-400",
        "Firebase": "text-yellow-400",
        "Tailwind CSS": "text-teal-400",
        "MongoDB": "text-green-400",
        "Nodejs": "text-green-500",
        "Expressjs": "text-red-500",
        "Stripe": "text-purple-400",
        "DaisyUI": "text-pink-400",
        "Animate.css": "text-orange-500",
        "Recharts": "text-lime-500",
        "React Router": "text-purple-500",
        "React Toastify": "text-fuchsia-700",
        "PropTypes": "text-rose-400"
    };

    const openProjectModal = (project) => {
        setSelectedProject(project);
        setTimeout(() => {
            const modal = document.getElementById('viewProject');
            if (modal) {
                modal.showModal();
            } else {
                console.error('Modal element not found in the DOM.');
            }
        }, 0);
    };

    return (
        <section id="projects" className="container mx-auto py-16 lg:py-20 scroll-mt-16">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white">
                    My <span className="text-primary">Projects</span>
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {(showAll ? projects : projects.slice(0, 3)).map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg w-full h-44 object-cover"
                            />
                            <h3 className="text-2xl font-semibold mt-4">{project.name.split(" – ")[0]}</h3>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>

                            <button
                                onClick={() => openProjectModal(project)}
                                className="mt-4 block btn bg-primary text-secondary hover:bg-transparent hover:text-primary font-poppins py-2 font-bold text-[15px] border border-primary rounded-md shadow-none hover:shadow-lg hover:shadow-[#0cbfdf61]"
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {projects.length > 3 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="btn bg-transparent hover:bg-transparent text-primary font-poppins px-6 py-6 font-semibold text-lg border border-primary rounded-lg mt-2 shadow-none hover:shadow-xl hover:shadow-[#0cbfdf61]"
                        >
                            {showAll ? "View Less" : "View More"}
                        </button>
                    </div>
                )}
            </div>

            {selectedProject && (
                <dialog id="viewProject" className="modal">
                    <div className="modal-box w-11/12 mr-2 md:mr-0 max-w-5xl bg-gray-800 max-h-[91.666667%]">
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => document.getElementById('viewProject').close()}
                                className="w-10 h-10 text-gray-500 hover:text-primary rounded-full bg-transparent flex items-center justify-center hover:bg-[#0cc0df33] cursor-pointer">
                                <ImCross size={20} />
                            </button>
                        </div>
                        <div className="px-2 pt-5 pb-10 md:px-10 lg:px-16">
                            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-6">{selectedProject.name}</h2>
                            {selectedProject.image && (
                                <img
                                    src={selectedProject.image}
                                    alt={selectedProject.name}
                                    className="w-full h-44 md:h-72 lg:h-[450px] object-cover rounded-lg shadow-md mb-6"
                                />
                            )}

                            <h3 className="text-[22px] font-semibold text-primary">Project Overview</h3>
                            <p className="text-gray-300 mt-2">{selectedProject.description}</p>

                            {selectedProject.features && (
                                <div className="mt-4">
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        {selectedProject.features.map((feature, index) => {
                                            const parts = feature.split(' – ');
                                            return (
                                                <li key={index}>
                                                    <strong>{parts[0]}</strong>
                                                    {parts[1] ? ` – ${parts[1]}` : ''}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                            )}

                            <h3 className="text-[22px] font-semibold text-primary mt-6">Main Tech Stack</h3>
                            <div className="mt-2 flex flex-wrap gap-2">
                                {selectedProject.techStack.map((tech, index) => (
                                    <span
                                        key={index}
                                        className={`px-2 py-1 text-sm font-semibold rounded-md ${techColors[tech] || "text-gray-300"}`}
                                    >
                                        #{tech}
                                    </span>
                                ))}
                            </div>

                            {selectedProject.challenges && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-primary">Challenges Faced</h3>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        {selectedProject.challenges.map((challenge, index) => (
                                            <li key={index}>{challenge}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            {selectedProject.futurePlans && (
                                <div className="mt-6">
                                    <h3 className="text-xl font-semibold text-primary">Potential Improvements</h3>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        {selectedProject.futurePlans.map((plan, index) => (
                                            <li key={index}>{plan}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                                {selectedProject.liveProjectLink && (
                                    <a
                                        href={selectedProject.liveProjectLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-primary text-secondary hover:bg-transparent hover:text-primary border border-primary font-poppins px-4 py-2 md:px-6 md:py-4 rounded-lg font-semibold transition hover:shadow-xl hover:shadow-[#0cbfdf61]"
                                    >
                                        Live Preview 🚀
                                    </a>
                                )}
                                {selectedProject.githubRepository && (
                                    <a
                                        href={selectedProject.githubRepository}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:bg-primary hover:text-secondary bg-transparent text-primary border border-primary font-poppins px-4 py-2 md:px-6 md:py-4 rounded-lg font-semibold transition hover:shadow-xl hover:shadow-[#0cbfdf2e]"
                                    >
                                        GitHub Repo 🛠️
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </dialog>
            )}
        </section>
    );
};

export default Projects;
