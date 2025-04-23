import { Link, useLoaderData } from "react-router-dom";

const Projects = () => {
    const projects = useLoaderData();

    return (
        <section id="projects" className="container mx-auto py-16 lg:py-20 scroll-mt-16 lg:scroll-mt-[90px]">
            <div className="w-11/12 md:w-10/12 lg:w-9/12 mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-white">
                    My <span className="text-primary">Projects</span>
                </h2>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <img
                                src={project.image}
                                alt={project.name}
                                className="rounded-lg w-full h-44 object-cover"
                            />
                            <h3 className="text-2xl font-semibold mt-4">{project.name}</h3>
                            <p className="text-gray-400 text-sm mt-2">{project.description}</p>

                            <Link
                                to={`/projects/${project.id}`}
                                className="mt-4 block btn bg-primary text-secondary hover:bg-transparent hover:text-primary font-poppins py-2 font-bold text-[15px] border border-primary rounded-md shadow-none"
                            >
                                View More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
