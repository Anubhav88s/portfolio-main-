'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        name: "Second-Brain",
        description:
            "A digital knowledge management system designed to capture, organize, and retrieve information efficiently. Enhances thinking, creativity, and productivity while enabling seamless content sharing.",
        tags: [
            { name: "react.js", color: "text-blue-500" },
            { name: "web-app", color: "text-green-500" },
            { name: "express", color: "text-pink-500" },
        ],
        image: "/assets/second-brain.jpg",
        source_code_link: "https://github.com/Anubhav88s/secondBrain",
    },
    {
        name: "Netflix Clone",
        description:
            "A Netflix frontend clone replicating the original platform's interface. Features a responsive layout, movie thumbnails, category sections, and smooth navigation for a visual user experience.",
        tags: [
            { name: "html", color: "text-orange-500" },
            { name: "css", color: "text-blue-400" },
        ],
        image: "/assets/Netflix.jpg",
        source_code_link: "https://github.com/Anubhav88s/Netflix_frontend",
    },
    {
        name: "X.com Clone",
        description:
            "A Twitter frontend clone closely resembling the original interface. Includes a responsive layout, tweet sections, sidebars, and smooth navigation for a clean, modern experience.",
        tags: [
            { name: "tailwind", color: "text-cyan-400" },
            { name: "react", color: "text-blue-500" },
        ],
        image: "/assets/X_logo.jpg",
        source_code_link: "https://github.com/Anubhav88s/twitter_frontend",
    },
    {
        name: "Sync-Fit",
        description:
            "A personalized fitness and diet app providing customized workout plans and diet charts based on user goals. Tracks progress and collaborates with food suppliers and local gyms.",
        tags: [
            { name: "next.js", color: "text-white" },
            { name: "full-stack", color: "text-purple-500" },
            { name: "express", color: "text-pink-500" },
        ],
        image: "/assets/SyncFit.png",
        source_code_link: "https://github.com/Anubhav88s/Sync-Fit",
    },
    {
        name: "Course Selling Website",
        description:
            "Backend services for a course platform enabling users to buy and sell courses. Built RESTful APIs enabling users to buy and sell courses with JWT-based authentication.",
        tags: [
            { name: "express.js", color: "text-red-500" },
            { name: "mongodb", color: "text-green-500" },
            { name: "javascript", color: "text-yellow-400" },
        ],
        image: "/assets/course-selling.png",
        source_code_link: "https://github.com/Anubhav88s/course-selling",
    }
]

export default function Projects() {
    return (
        <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center items-center p-10 bg-transparent snap-start">
            <div className="max-w-7xl w-full z-10 pointer-events-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider">My work</p>
                    <h2 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px]">Projects.</h2>
                </motion.div>
                <div className="w-full flex">
                    <motion.p
                        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                        className="mt-3 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[26px] md:leading-[30px] text-gray-300"
                    >
                        Here are some of my recent projects that showcase my technical expertise and creative approach.
                    </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap gap-7 justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={`project-${index}`}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.4 }}
                            viewport={{ once: true }}
                            className="bg-[#151030] rounded-2xl w-full sm:w-[360px] cursor-pointer"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition duration-500 group-hover:duration-200"></div>

                            <div className="relative glass-card p-5 h-full group-hover:border-purple-500/30 transition-colors duration-300">
                                <div className="relative w-full h-[230px] bg-black/50 rounded-2xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className={`transform group-hover:scale-110 transition-transform duration-700 ease-in-out ${project.name === 'Sync-Fit' ? 'object-contain p-2 bg-[#1d1836]' : 'object-cover'}`}
                                    />
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
                                        <a
                                            href={project.source_code_link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:glow-github transition-all duration-300"
                                        >
                                            <Github size={24} />
                                        </a>
                                    </div>
                                </div>

                                <div className="mt-5">
                                    <h3 className="text-white font-bold text-[24px] group-hover:text-gradient transition-all duration-300">
                                        {project.name}
                                    </h3>
                                    <p className="mt-2 text-secondary text-[14px] text-gray-400 h-[60px] line-clamp-3">
                                        {project.description}
                                    </p>
                                </div>
                                <div className="mt-4 flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <p key={tag.name} className={`text-[12px] font-medium ${tag.color} px-3 py-1 rounded-full bg-white/5 border border-white/5`}>
                                            #{tag.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
