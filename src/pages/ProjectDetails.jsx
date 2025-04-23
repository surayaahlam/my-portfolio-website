import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        // Ensure ID comparison is correct (string vs number issue)
        const foundProject = data.find((proj) => String(proj.id) === id);
        setProject(foundProject);
    }, [id, data]);

    if (!project) {
        return <p className="text-center text-gray-300">Loading project details...</p>;
    }

    // Tech stack color mapping
    const techColors = {
        "React": "text-blue-400",
        "Firebase": "text-yellow-400",
        "Tailwind CSS": "text-teal-400",
        "MongoDB": "text-green-400",
        "Nodejs": "text-green-500",
        "Expressjs": "text-red-500",
        "Stripe": "text-purple-400",
        "DaisyUI": "text-pink-400"
    };

    return (
        <section className="container mx-auto pb-16 lg:pb-20">
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto bg-gray-800 p-8 rounded-xl shadow-lg">

                {/* Project Image */}
                {project.image && (
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[500px] object-cover rounded-lg shadow-md mb-6"
                    />
                )}

                {/* Project Name */}
                <h2 className="text-4xl font-bold text-white">{project.name}</h2>

                {/* Live Preview & GitHub Links */}
                <div className="mt-4 flex flex-wrap gap-4">
                    {project.liveProjectLink && (
                        <a
                            href={project.liveProjectLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary text-secondary hover:bg-transparent hover:text-primary border border-primary font-poppins px-4 py-2 rounded-md font-semibold transition"
                        >
                            Live Preview 🚀
                        </a>
                    )}
                    {project.githubRepository && (
                        <a
                            href={project.githubRepository}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:bg-primary hover:text-secondary bg-transparent text-primary border border-primary font-poppins px-4 py-2 rounded-md font-semibold transition"
                        >
                            GitHub Repo 🛠️
                        </a>
                    )}
                </div>

                {/* Project Description */}
                <p className="text-gray-300 mt-6">{project.description}</p>

                {/* Features */}
                {project.features && (
                    <div className="mt-4">
                        <ul className="list-disc list-inside text-gray-300 mt-2">
                            {project.features.map((feature, index) => {
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

                {/* Tech Stack */}
                <h3 className="text-[22px] font-semibold text-primary mt-6">Main Tech Stack</h3>
                <div className="mt-2 flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                        <span
                            key={index}
                            className={`px-2 py-1 text-sm font-semibold rounded-md ${techColors[tech] || "text-gray-300"}`}
                        >
                            #{tech}
                        </span>
                    ))}
                </div>

                {/* Challenges Faced */}
                {project.challenges && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-primary">Challenges Faced</h3>
                        <ul className="list-disc list-inside text-gray-300 mt-2">
                            {project.challenges.map((challenge, index) => (
                                <li key={index}>{challenge}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Future Improvements */}
                {project.futurePlans && (
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-primary">Potential Improvements</h3>
                        <ul className="list-disc list-inside text-gray-300 mt-2">
                            {project.futurePlans.map((plan, index) => (
                                <li key={index}>{plan}</li>
                            ))}
                        </ul>
                    </div>
                )}

            </div>
        </section>
    );
};

export default ProjectDetails;
