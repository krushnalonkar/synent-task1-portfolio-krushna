import { motion as Motion } from 'framer-motion'
import Profile1 from '../assets/Profile1.avif';

const Hero = () => {
    return (
        <Motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true }}
            id='home'
            className='min-h-screen flex items-center pt-20 pb-16 bg-linear-to-r from-dark-100 via-dark-300 to-dark-100'
        >
            <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

                {/* Left side div */}
                <div className='md:w-1/2 mb-10 md:mb-0'>
                    <h1 className='text-4xl md:text-6xl font-bold mb-4'>
                        Hi, I'm <span className='text-purple'>Krushna Lonkar</span>
                    </h1>
                    <h2 className='text-2xl md:text-4xl font-semibold mb-6 typewriter'>Web Developer</h2>
                    <p className='text-lg text-gray-300 mb-8 '>Aspiring Web Developer passionate about creating modern and interactive websites.</p>
                    <div className='flex space-x-4'>
                        <a href="#Projects" className='px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300'>View Work</a>
                        <a href="#Contact" className='px-6 py-3 border border-purple rounded-lg font-medium hover:bg-purple/20 transition decoration-purple-300'>Contact Me</a>
                    </div>
                </div>

                {/* Right side div */}
                <div className='md:w-1/2 flex justify-center'>
                    <div className='relative w-64 h-64 md:w-80 md:h-80'>
                        <div className='basolute inset-0 rounded-full bg-linear-to-r from-purple to-pink opacity-70'>
                            <Motion.img
                                animate={{ y: [0, -15, 0] }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeInOut'
                                }}
                                className='relative rounded-full w-70 h-70 md:w-80 md:h-80 object-cover z-10 animate-float'
                                src={Profile1} alt='profile' />
                        </div>
                    </div>
                </div>
            </div>
        </Motion.div>
    )
}

export default Hero
