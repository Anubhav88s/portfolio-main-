'use client'
import { motion } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
    {
        name: "Zendraw",
        description: "Zendraw is a real-time collaborative whiteboard built from scratch with an infinite canvas, smooth drawing tools, and live multi-user syncing via WebSockets.",
        tags: [
            { name: "next.js", color: "text-white" },
            { name: "socket.io", color: "text-green-500" },
            { name: "postgresql", color: "text-blue-500" },
        ],
        image: "/assets/zendraw.png",
        source_code_link: "https://github.com/Anubhav88s/zendraw.git",
        live_link: "https://zendraw-frontend.onrender.com",
    },
    {
        name: "ZyncTalk",
        description: "A real-time chat application featuring secure messaging, user authentication, and profile management. Built with a modern tech stack for a seamless communication experience.",
        tags: [
            { name: "react.js", color: "text-blue-500" },
            { name: "socket.io", color: "text-green-500" },
            { name: "express", color: "text-pink-500" },
        ],
        image: "/assets/zynctalk.png",
        source_code_link: "https://github.com/Anubhav88s/Chat-app-zyncTalk.git",
        live_link: "https://zynctalk.onrender.com",
    },
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
        source_code_link: "https://github.com/Anubhav88s/secondBrain.git",
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
        source_code_link: "https://github.com/Anubhav88s/Sync-Fit.git",
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
        source_code_link: "https://github.com/Anubhav88s/course-selling.git",
    },
    {
        name: "Page Summarizer",
        description:
            "An AI-powered Chrome extension that provides instant summaries of web pages using advanced NLP to distill long articles into concise, readable key points.",
        tags: [
            { name: "chrome-extension", color: "text-blue-400" },
            { name: "reactjs", color: "text-green-400" },
            { name: "nodejs", color: "text-pink-400" },
        ],
        image: "/assets/summarizer.jpg",
        source_code_link: "https://github.com/Anubhav88s/Page-Summaizer-Chrome-Extenction.git",
    }
]

const ProjectsMemo = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [activeProjectId, setActiveProjectId] = React.useState<number | null>(null);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="projects" className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 py-10 md:p-14 bg-transparent snap-start pointer-events-auto">
            <div className="max-w-7xl w-full z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center"
                >
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider">My work</p>
                    <h2 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px]">Projects.</h2>
                </motion.div>
                <div className="w-full flex justify-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="mt-3 text-secondary text-[15px] md:text-[17px] max-w-3xl leading-[26px] md:leading-[30px] text-gray-300 text-center"
                    >
                        Here are some of my recent projects that showcase my technical expertise and creative approach.
                    </motion.p>
                </div>

                <div className="mt-20 flex flex-wrap gap-7 justify-center">
                    {projects.map((project, index) => (
                        <motion.div
                            key={`project-${index}`}
                            onClick={() => {
                                if (isMobile) {
                                    setActiveProjectId(activeProjectId === index ? null : index);
                                }
                            }}
                            initial={{
                                opacity: 0,
                                y: isMobile ? 30 : 50,
                                scale: isMobile ? 0.9 : 0.8,
                                rotateX: isMobile ? 0 : 10
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                rotateX: 0
                            }}
                            transition={{
                                delay: isMobile ? index * 0.05 : index * 0.1,
                                duration: isMobile ? 0.5 : 0.6,
                                type: isMobile ? "tween" : "spring",
                                ease: isMobile ? "easeOut" : undefined,
                                bounce: isMobile ? undefined : 0.3
                            }}
                            viewport={{ once: true, amount: 0.1 }}
                            className="relative w-full sm:w-[360px] cursor-pointer group perspective-[1000px]"
                        >
                            <div className="relative bg-[#151030] rounded-2xl h-full">
                                <div className={`absolute -inset-0.5 bg-linear-to-r from-pink-600 to-purple-600 rounded-2xl opacity-0 ${activeProjectId === index ? 'opacity-75' : 'group-hover:opacity-75'} blur transition duration-500 group-hover:duration-200`} />

                                <div className={`relative bg-[#151030] p-5 h-full border border-white/5 ${activeProjectId === index ? 'border-purple-500/30' : 'group-hover:border-purple-500/30'} transition-colors duration-300 rounded-2xl will-change-transform`}>
                                    <div className="relative w-full h-[230px] bg-black/50 rounded-2xl overflow-hidden shadow-2xl">
                                        <Image
                                            src={project.image}
                                            alt={project.name}
                                            fill
                                            quality={80}
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 360px"
                                            className={`transform ${activeProjectId === index ? 'scale-110' : 'group-hover:scale-110'} transition-transform duration-700 ease-in-out ${['Sync-Fit', 'Page Summarizer'].includes(project.name) ? 'object-contain p-4 bg-white/5' : 'object-cover'}`}
                                        />
                                        <div className={`absolute inset-0 bg-black/60 ${activeProjectId === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]`}>
                                            <a
                                                href={project.source_code_link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:glow-github transition-all duration-300 hover:scale-110"
                                            >
                                                <Github size={24} />
                                            </a>
                                            {project.live_link && (
                                                <a
                                                    href={project.live_link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="w-12 h-12 rounded-full bg-black/80 border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black hover:glow-external transition-all duration-300 hover:scale-110"
                                                >
                                                    <ExternalLink size={24} />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-5">
                                        <h3 className="font-bold text-[24px] bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600 transition-all duration-300">
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(ProjectsMemo)
