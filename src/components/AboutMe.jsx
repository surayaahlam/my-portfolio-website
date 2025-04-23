
const AboutMe = () => {
    return (
        <section id="about" className="container mx-auto py-16 lg:py-20 scroll-mt-16 lg:scroll-mt-8">
            <div className="w-11/12 md:w-10/12 lg:w-8/12 mx-auto">
                <h2 className="text-[42px] font-extrabold text-white text-center mb-8">
                    <span className="text-primary">About</span> Me
                </h2>
                <p className="text-lg text-gray-300 text-center">
                    I'm a passionate <span className="font-semibold text-primary">MERN Stack Developer </span>
                    with a keen eye for crafting seamless, user-friendly web experiences. My journey into web development
                    wasn’t just about learning to code—it was about discovering the perfect blend of <strong>creativity and logic</strong>.
                </p>

                <div className="mt-10 space-y-8">
                    <div className="bg-gray-800 shadow-lg rounded-2xl p-6">
                        <h3 className="text-2xl font-semibold text-primary mb-3">🚀 How It All Started</h3>
                        <p className="text-gray-300">
                            I've always been fascinated by technology and how websites work. My curiosity led me to coding,
                            and I instantly fell in love. As I explored <strong>HTML, CSS, and JavaScript</strong>, my passion only grew
                            stronger. Whether it's designing intuitive interfaces or solving complex problems, I enjoy every
                            part of the journey and look forward to creating impactful digital experiences.
                        </p>

                        <h3 className="text-2xl font-semibold text-primary mb-3 mt-6 lg:mt-8">💡 Why I Love Programming</h3>
                        <p className="text-gray-300">
                            There’s something incredibly satisfying about turning an idea into a fully functional web application.
                            Problem-solving, debugging, and optimizing code feel like solving a challenging puzzle—frustrating at
                            times, but always rewarding. I love creating <strong>sleek e-commerce sites, engaging portfolios, and full-fledged applications</strong> that make life easier for people.
                        </p>



                        <h3 className="text-2xl font-semibold text-primary mb-3 mt-6 lg:mt-8">🌟 What’s Next?</h3>
                        <p className="text-gray-300">
                            The tech world never stops evolving, and neither do I! Whether it’s learning a new framework,
                            exploring performance optimizations, or contributing to open-source projects, I’m always looking
                            for ways to grow. My goal is to build innovative web solutions that <strong>enhance user experiences</strong> and solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;