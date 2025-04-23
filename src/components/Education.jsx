import { FaUniversity } from "react-icons/fa";

const educationData = [
    {
        id: 1,
        title: "Master of Science (MS), Computer Science and Engineering (CSE)",
        specialization: "Data Science",
        institution: "East West University, Dhaka",
        year: "May 2022 - Ongoing",
        cgpa: "3.79 / 4.00",
        status: "Ongoing",
    },
    {
        id: 2,
        title: "Bachelor of Science (BSc), Information and Communications Engineering",
        institution: "East West University, Dhaka",
        year: "2016 - 2020",
        cgpa: "3.19 / 4.00",
        status: "Completed",
    },
    {
        id: 3,
        title: "Higher Secondary Certificate (HSC), Science",
        institution: "Bangladesh International School & College, Jeddah",
        year: "2015",
        cgpa: "4.50 / 5.00",
        status: "Completed",
    },
];

const Education = () => {
    return (
        <section id="education" className="container mx-auto py-16 lg:py-20 scroll-mt-14">
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
                <h2 className="text-[42px] font-extrabold text-center text-white">
                    Educational <span className="text-primary">Qualification</span>
                </h2>
                <div className="mt-8 space-y-4">
                    {educationData.map((edu, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-xl flex justify-between items-center shadow-lg bg-gray-800"
                        >
                            <div className="flex items-center gap-4">
                                <FaUniversity className="text-primary" size={30} />
                                <div>
                                    <h3 className="text-xl font-semibold text-white">{edu.title}</h3>
                                    {edu.specialization && (
                                        <p className="text-base mb-1 text-gray-400"><strong className="text-gray-300">Major: </strong>{edu.specialization}</p>
                                    )}
                                    <p className="text-gray-400">{edu.institution}</p>
                                    <p className="text-gray-500">{edu.year}</p>
                                    {edu.id === 3 ?
                                        <p className="text-gray-300 font-medium"><strong>GPA:</strong> {edu.cgpa}</p>
                                        :
                                        <p className="text-gray-300 font-medium"><strong>CGPA:</strong> {edu.cgpa}</p>
                                    }
                                </div>
                            </div>
                            <span className="font-semibold text-primary">
                                {edu.status}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
