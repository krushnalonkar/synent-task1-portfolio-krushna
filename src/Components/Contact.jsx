import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { motion as Motion } from 'framer-motion'
import React from 'react'
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'

const Contact = () => {
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_2h7jqi4",
            "template_oq4r1wi",
            form.current,
            "aU1U2jm8C1ij_bcGK"
        )
            .then(() => {
                alert("Message Sent Successfully ✅");
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
                alert("Failed to send message ❌");
            });
    };

    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='contact'
            className='py-20 bg-dark-100'
        >
            <div className='container mx-auto px-6'>
                <h2 className='text-3xl font-semibold text-center mb-4'>Get In <span className='text-purple'> Touch</span></h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Have a project in mind or want to collaborate? Let's talk!</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                    {/* Contact form */}
                    <div>
                        <form ref={form} onSubmit={handleSubmit} className='space-y-6'>
                            <div>
                                <label htmlFor="name" className='block text-gray-300 mb-2'>Your Name</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" name='user_name'/>
                            </div>

                            <div>
                                <label htmlFor="email" className='block text-gray-300 mb-2'>Email Address</label>
                                <input className='w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="email" name='user_email'/>
                            </div>

                            <div>
                                <label htmlFor="message" className='block text-gray-300 mb-2'>Your Message</label>
                                <textarea className='w-full h-30 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none' type="text" name='message'/>
                            </div>
                            <button type="submit" className='w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>Send</button>
                        </form>
                    </div>

                    {/* Contact Informatin */}
                    <div className='space-y-8'>
                        <div className='flex items-start '>
                            <div className='text-purple text-2xl mr-4'>
                                <FaPhone />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                                <p className='text-gray-400'>+91-7822061312</p>
                            </div>
                        </div>

                        <div className='flex items-start '>
                            <div className='text-purple text-2xl mr-4'>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Location</h3>
                                <p className='text-gray-400'>Pune Parvati 411009</p>
                            </div>
                        </div>

                        <div className='flex items-start '>
                            <div className='text-purple text-2xl mr-4'>
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className='text-lg font-semibold mb-2'>Email</h3>
                                <p className='text-gray-400'>lonkarkrushna13@gmail.com</p>
                            </div>
                        </div>

                        <div className='pt-4'>
                            <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                            <div className='flex space-x-4'>
                                <a href="https://github.com/krushnalonkar" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-purple hover:bg-purple hover:text-white transition duration-300'>
                                    <FaGithub />
                                </a>

                                <a href="https://www.linkedin.com/in/krushna-lonkar-887bb12a3/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition duration-300'>
                                    <FaLinkedin />
                                </a>

                                <a href="mailto:lonkarkrushna13@gmail.com?subject=Portfolio Inquiry" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400 hover:bg-blue-400 hover:text-white transition duration-300'>
                                    <FaEnvelope />
                                </a>

                                <a href="https://www.instagram.com/iamkrushna__45/" className='w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300'>
                                    <FaInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Contact
