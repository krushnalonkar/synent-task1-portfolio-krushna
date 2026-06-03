import { motion as Motion } from 'framer-motion'
import Profile1 from '../assets/Profile1.avif';
import {aboutInfo} from '../assets/assets'
import React from 'react'

const About = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='about'
            className='py-20 bg-dark-200'
        >
            <div className='container mx-0 px-6'>

                {/* Heading for about section */}
                <h2 className='text-3xl font-bold text-center mb-4'>About
                    <span className='text-purple'> Me</span>
                </h2>
                <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about my background and passion</p>

                {/* image + my journy */}
                <div className='flex flex-col md:flex-row items-center gap-12 '>
                    {/*image*/}
                    <div className='md:w-1/2 rounded-2xl overflow-hidden'>
                        <Motion.img
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.9, ease: 'easeOut' }}
                            viewport={{ once: false, amount: 0.2 }}
                            className='w-full h-full object-cover'
                            src={Profile1} alt="Profile" />
                    </div>
                    {/* my journy text content */}
                    <Motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        viewport={{ once: false, amount: 0.2 }}
                        className='md:w-1/2'>

                        <div className='rounded-2xl p-8'>
                            <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
                            <p className='text-gray-300 mb-6'>I'm an aspiring Web Developer passionate about creating responsive, user-friendly, and modern web applications. My journey began with learning how websites work, and gradually I developed a strong interest in frontend development, UI design, and building interactive user experiences.</p>
                            <p className='text-gray-300 mb-12'>I enjoy working with technologies like React.js, JavaScript, HTML, and CSS while continuously improving my web development skills. I believe in writing clean code, creating responsive designs, and building applications that provide a great user experience.</p>

                            {/* Card */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {
                                    aboutInfo.map((data, index)=>(
                                        <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
                                            <div className='text-purple text-4xl mb-4'>
                                                <data.icon />
                                            </div>
                                            <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                                            <p className='text-gray-400'>{data.description}</p>
                                        </div>
                                    ))
                                }

                            </div>
                        </div>

                    </Motion.div>

                </div>

            </div>
        </Motion.div>
    )
}

export default About
