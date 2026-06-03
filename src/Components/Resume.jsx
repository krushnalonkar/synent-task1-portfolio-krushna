import React from "react";
import { motion as Motion } from "framer-motion";
import { FaEye, FaDownload } from "react-icons/fa";


const Resume = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            id="resume"
            className="py-20 bg-dark-200"
        >
            <div className="container mx-auto px-6">

                {/* Heading Section (Education sarkha) */}
                <h2 className="text-3xl font-bold text-center mb-4">
                    My <span className="text-purple">Resume</span>
                </h2>

                <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
                    A snapshot of my academic journey and technical profile.
                </p>

                {/* Resume Content */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Image */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <img
                                src="resumeimg.webp"
                                alt="Resume Preview"
                                className="w-60 md:w-72 rounded-2xl shadow-2xl border border-purple/30 group-hover:scale-105 transition duration-500"
                            />
                            <div className="absolute inset-0 bg-purple/10 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
                        </div>
                    </div>

                    {/* Buttons Section */}
                    <div className="flex justify-center md:justify-start">
                        <div className="bg-dark-300/40 backdrop-blur-md p-8 rounded-2xl border border-purple/20 shadow-xl max-w-xl">

                            <p className="text-gray-300 mb-6 text-center md:text-left leading-relaxed">
                                Download or preview my complete resume to learn about my academic journey, technical skills, practical projects, and readiness to contribute as a fresher in the tech industry.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">

                                <a
                                    href="ResumePreiew.png"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 px-7 py-3 bg-purple text-white rounded-xl shadow-lg hover:bg-purple/80 hover:scale-105 transition duration-300"
                                >
                                    <FaEye /> View Resume
                                </a>

                                <a
                                    href="KrushnaCV.pdf"
                                    download=""
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-3 px-7 py-3 border border-purple text-purple rounded-xl hover:bg-purple hover:text-white hover:scale-105 transition duration-300"
                                >
                                    <FaDownload /> Download Resume
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>
    );
};

export default Resume;
