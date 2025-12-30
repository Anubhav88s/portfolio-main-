'use client'
import { motion } from 'framer-motion'
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

export default function Experience() {
    return (
        <section id="work" className="relative w-full min-h-screen flex flex-col justify-center items-center p-10 bg-transparent snap-start">
            <div className="max-w-7xl w-full z-10 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider text-center">What I have done so far</p>
                    <h2 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px] text-center">Work Experience.</h2>
                </motion.div>

                <div className="mt-12 md:mt-20 flex flex-col gap-8 md:gap-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ x: index % 2 === 0 ? -100 : 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.4 }}
                            className={`flex flex-col md:flex-row gap-4 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                        >
                            <div className="w-full md:w-[70%] lg:w-1/2 p-6 md:p-8 rounded-2xl bg-[#1d1836]/80 backdrop-blur-sm border border-gray-800 hover:border-purple-500 transition-colors">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-gray-900 rounded-full border border-gray-800 text-2xl md:text-4xl">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white text-[20px] md:text-[24px] font-bold">{exp.title}</h3>
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
