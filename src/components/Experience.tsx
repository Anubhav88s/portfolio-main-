'use client'
import { motion, useScroll, useSpring } from 'framer-motion'
import React from 'react'
import { ExternalLink } from 'lucide-react'

const experiences = [
    {
        title: "Front End Web Development Intern",
        company_name: "IBM SkillBuild × Edunet",
        icon: "💻",
        date: "21 Aug 2025 – 30 Sept 2025",
        certificate_link: "https://drive.google.com/file/d/1DD_Cl3FnsU_I1iMzsXopwkFtrcjZgrZz/view",
        points: [
            "Completed a 6-week industry-aligned internship focused on Front-End Development.",
            "Built responsive UI components and improved front-end design using modern web technologies.",
            "Gained exposure to professional workflows through IBM SkillBuild, Edunet Foundation, and AICTE collaboration.",
        ],
    },
    {
        title: "Web Developer Intern",
        company_name: "Vault of Codes",
        icon: "🚀",
        date: "July 2025 – August 2025",
        certificate_link: "https://drive.google.com/file/d/1oqfjtAfpT95DWzyBIdVMI5mTbOXd41Il/view",
        points: [
            "Enhanced UI and design of the company website to improve user experience and visual appeal.",
            "Applied modern frontend technologies including HTML, CSS, JavaScript, and React.js.",
            "Refined responsive layouts and interactive components to ensure cross-device compatibility.",
        ],
    },
]

const ExperienceMemo = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const containerRef = React.useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 80%", "end 50%"]
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section ref={containerRef} id="work" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-10 md:p-14 bg-transparent snap-start">
            <div className="max-w-7xl w-full z-10 pointer-events-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] text-center">Work Experience.</h2>
                </motion.div>

                <div className="mt-12 md:mt-20 flex flex-col gap-8 md:gap-10 relative">
                    {/* Animated Timeline Line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute left-[24px] md:left-1/2 top-0 w-[2px] h-full bg-linear-to-b from-purple-500 via-pink-500 to-purple-500 origin-top -translate-x-1/2 z-0"
                    />

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{
                                opacity: 0,
                                y: 50,
                                x: isMobile ? 0 : (index % 2 === 0 ? -100 : 100)
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                x: 0
                            }}
                            transition={{
                                duration: isMobile ? 0.5 : 0.7,
                                type: isMobile ? "tween" : "spring",
                                ease: isMobile ? "easeOut" : undefined,
                                bounce: isMobile ? undefined : 0.4,
                                delay: isMobile ? index * 0.05 : index * 0.1
                            }}
                            viewport={{ once: true, amount: 0.2 }}
                            className={`w-full flex relative z-10 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2, duration: 0.4 }}
                                className="absolute left-[24px] md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-[#1d1836] -translate-x-1/2 mt-8 z-20"
                            />

                            <div className={`w-[calc(100%-60px)] ml-[60px] md:ml-0 md:w-[45%] p-5 md:p-8 rounded-2xl bg-[#1d1836] border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] group`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-900 rounded-full border border-gray-800 text-2xl md:text-4xl group-hover:scale-110 transition-transform duration-300 text-shadow-glow">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[20px] md:text-[24px] font-bold group-hover:text-purple-400 transition-colors">{exp.title}</h3>
                                        <p className="text-gray-400 text-[14px] md:text-[16px] font-semibold" style={{ margin: 0 }}>{exp.company_name}</p>
                                    </div>
                                </div>
                                <ul className="mt-5 list-disc ml-5 space-y-2">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-gray-300 text-[13px] md:text-[14px] pl-1 tracking-wider">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                                    <p className="text-gray-500 text-xs md:text-sm font-medium italic m-0">{exp.date}</p>
                                    {exp.certificate_link && (
                                        <a
                                            href={exp.certificate_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-xs md:text-sm text-purple-400 hover:text-purple-300 transition-colors"
                                        >
                                            <ExternalLink size={14} />
                                            View Certificate
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(ExperienceMemo)
