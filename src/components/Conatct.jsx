import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    return (
        <section id="contact" className="bg-contact_img bg-cover py-16 lg:py-20 scroll-mt-14">
            <div className="container mx-auto">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <h2 className="text-[42px] font-extrabold text-center mb-8">Contact Me</h2>

                    {/* Two-column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left Side - Contact Form */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
                            <label className="text-white block mb-2">Your Name</label>
                            <input
                                type="text"
                                placeholder="What's your good name?"
                                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md mb-4"
                            />

                            <label className="text-white block mb-2">Your Email</label>
                            <input
                                type="email"
                                placeholder="What's your email?"
                                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md mb-4"
                            />

                            <label className="text-white block mb-2">Your Message</label>
                            <textarea
                                placeholder="What do you want to say?"
                                className="w-full bg-gray-800 text-gray-300 p-3 rounded-md h-32 mb-4"
                            ></textarea>

                            <button className="bg-primary text-secondary hover:bg-transparent hover:text-primary border border-primary font-poppins px-6 py-2 rounded-md font-semibold transition hover:shadow-lg hover:shadow-[#0cbfdf61]">
                                Send
                            </button>
                        </div>

                        {/* Right Side - Contact Information */}
                        <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-white">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">Get in Touch</h3>
                            <p className="text-gray-300 mb-6">
                                Feel free to reach out via email, phone, or WhatsApp. We're here to assist you!
                            </p>
                            <div className="space-y-4 text-gray-300">
                                <p className="flex items-center gap-2">
                                    <FaEnvelope className="text-primary" />
                                    <p className="hover:underline">
                                        surayaahlam@gmail.com
                                    </p>
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaPhoneAlt className="text-primary" />
                                    <p className="hover:underline">
                                        +880 1951-831978
                                    </p>
                                </p>
                                <p className="flex items-center gap-2">
                                    <FaWhatsapp size={20} className="text-primary" />
                                    <a href="https://wa.me/8801951831978" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                        Chat on WhatsApp
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};

export default Contact;
