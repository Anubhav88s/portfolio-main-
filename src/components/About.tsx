'use client'

import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
// For now, pure CSS/framer motion cards

const services = [
    {
        title: "Web Developer",
        icon: "💻", // Placeholder icon
    },
    {
        title: "React.js Developer",
        icon: "⚛️",
    },
    {
        title: "Backend Developer",
        icon: "⚙️",
    },
    {
        title: "Next.js Developer",
        icon: "⚡",
    },
]

const AboutMemo = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="about" className="relative w-full min-h-screen mx-auto flex flex-col justify-center items-center px-6 py-10 md:p-14 bg-transparent snap-start">
            <div className="max-w-7xl w-full z-10 pointer-events-auto">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    }}
                >
                    <motion.p
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                        }}
                        className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider"
                    >
                        Introduction
                    </motion.p>
                    <motion.h2
                        variants={{
                            hidden: { opacity: 0, scale: 0.9 },
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                        }}
                        className="text-white font-black text-[30px] xs:text-[35px] sm:text-[50px] md:text-[60px]"
                    >
                        Overview.
                    </motion.h2>
                </motion.div>

                <div className="mt-4 flex flex-col md:flex-row gap-8 md:gap-10 items-center">
                    <motion.p
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="text-gray-300 text-[15px] md:text-[17px] leading-[26px] md:leading-[30px] flex-1 text-left md:text-justify max-w-3xl"
                    >
                        An independent and self-motivated individual with a strong work ethic and commitment to achieving
                        goals, especially in MERN stack and Next.js development. Passionate about learning modern web
                        technologies and building efficient, user-friendly web applications.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="relative w-full max-w-[280px] md:max-w-[300px] aspect-square shrink-0"
                    >
                        <div className="w-full h-full rounded-2xl overflow-hidden border-2 border-violet-500/30 shadow-2xl shadow-violet-500/20 group relative">
                            <Image
                                src="/assets/profile_v2.jpg"
                                alt="Profile"
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-500 scale-125 group-hover:scale-135 origin-top -translate-x-5"
                            />
                            <div className="absolute inset-0 bg-violet-500/10 mix-blend-overlay group-hover:bg-transparent transition-colors duration-300 pointer-events-none z-10" />
                        </div>
                    </motion.div>
                </div>

                <div className="mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
                    {services.map((service, index) => (
                        <div key={service.title} className="w-full flex justify-center">
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.8,
                                    rotateX: isMobile ? 0 : 90
                                }}
                                whileInView={{
                                    opacity: 1,
                                    scale: 1,
                                    rotateX: 0
                                }}
                                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                                transition={{
                                    delay: isMobile ? index * 0.05 : index * 0.1,
                                    duration: isMobile ? 0.5 : 0.6,
                                    type: isMobile ? "tween" : "spring",
                                    ease: isMobile ? "easeOut" : undefined
                                }}
                                viewport={{ once: true }}
                                className="w-full max-w-[280px] py-5 px-8 md:px-12 bg-[#151030] border border-white/5 rounded-2xl flex flex-col justify-evenly items-center hover:border-purple-500/50 transition-colors duration-300 group will-change-transform shadow-xl"
                            >
                                <motion.div
                                    whileHover={{ rotate: 15, scale: 1.2 }}
                                    className="text-3xl md:text-4xl mb-4"
                                >
                                    {service.icon}
                                </motion.div>
                                <h3 className="text-white text-[18px] md:text-[20px] font-bold text-center group-hover:text-purple-400 transition-colors">
                                    {service.title}
                                </h3>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(AboutMemo)
