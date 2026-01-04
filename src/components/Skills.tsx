'use client'
import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import Image from 'next/image'

const skillCategories = [
    {
        title: "Frontend",
        description: "Building immersive & responsive interfaces",
        color: "from-blue-500 to-cyan-400",
        skills: [
            { name: "Next.js", icon: "/assets/Next.js.png" },
            { name: "React", icon: "/assets/react.png" },
            { name: "TypeScript", icon: "/assets/typescript.png" },
            { name: "Redux", icon: "/assets/redux.png" },
            { name: "Tailwind CSS", icon: "/assets/TailwindCSS.png" },
            { name: "HTML", icon: "/assets/html.png" },
            { name: "CSS", icon: "/assets/css.png" },
            { name: "Sass", icon: "/assets/sass.png" },
            { name: "JavaScript", icon: "/assets/javascript.png" },
        ]
    },
    {
        title: "Backend",
        description: "Robust architectures & scalable APIs",
        color: "from-purple-500 to-pink-500",
        skills: [
            { name: "Node.js", icon: "/assets/node.png" },
            { name: "Express", icon: "/assets/Express.png" },
            { name: "Java", icon: "/assets/Java.png" },
            { name: "MongoDB", icon: "/assets/MongoDB.png" },
            { name: "PostgreSQL", icon: "/assets/PostgresSQL.png" },
            { name: "MySQL", icon: "/assets/MySQL.png" },
            { name: "Socket.io", icon: "/assets/Socket.io.png" },
        ]
    },
    {
        title: "Tools & Others",
        description: "Streamlining development & deployment",
        color: "from-orange-500 to-yellow-400",
        skills: [
            { name: "Git", icon: "/assets/git.png" },
            { name: "Figma", icon: "/assets/figma.png" },
            { name: "API", icon: "/assets/api.png" },
            { name: "Postman", icon: "/assets/Postman.png" },
            { name: "Docker", icon: "/assets/docker.png" },
        ]
    }
]

const SkillCard = (props: { category: typeof skillCategories[0], index: number, isMobile: boolean }) => {
    const { category, index } = props
    const isTools = category.title === "Tools & Others"

    return (
        <motion.div
            initial={{
                opacity: 0,
                y: props.isMobile ? 30 : 50,
                scale: props.isMobile ? 0.95 : 0.9
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1
            }}
            transition={{
                duration: props.isMobile ? 0.5 : 0.6,
                delay: props.isMobile ? props.index * 0.05 : props.index * 0.1,
                type: props.isMobile ? "tween" : "spring",
                ease: props.isMobile ? "easeOut" : undefined,
                bounce: props.isMobile ? undefined : 0.4
            }}
            viewport={{ once: true, amount: 0.1 }}
            className="h-full"
        >
            <div className="relative h-full w-full bg-[#0a0a0f] border border-white/5 rounded-[2.5rem] overflow-hidden p-8 md:p-10 flex flex-col group hover:border-white/10 transition-all duration-500 shadow-2xl">
                {/* Background Glow */}
                <div className={`absolute -inset-1 bg-linear-to-r ${category.color} opacity-10 blur-2xl group-hover:opacity-20 transition duration-500`} />

                {/* Header Section */}
                <div className="mb-10 relative z-10">
                    <h3 className={`text-4xl md:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r ${category.color} mb-4 tracking-tight`}>
                        {category.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg font-medium leading-relaxed opacity-80">
                        {category.description}
                    </p>
                </div>

                {/* Skills Grid */}
                <div className={`grid ${isTools ? 'grid-cols-2 gap-6' : 'grid-cols-2 gap-4'} grow relative z-10`}>
                    {category.skills.map((skill, sIndex) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: sIndex * 0.05, duration: 0.3 }}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(255,255,255,0.08)",
                                borderColor: "rgba(255,255,255,0.15)"
                            }}
                            className={`${isTools
                                ? 'flex flex-col items-center justify-center p-8 aspect-square'
                                : 'flex items-center gap-4 p-4'
                                } rounded-3xl bg-white/5 border border-white/5 transition-all cursor-default group/item shadow-lg`}
                        >
                            <div className={`${skill.name === "Docker" ? "w-20 h-20 mb-4" :
                                isTools ? 'w-12 h-12 mb-4' : 'w-8 h-8'
                                } flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 relative`}>
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    sizes={skill.name === "Docker" ? "80px" : isTools ? "48px" : "32px"}
                                    className="object-contain"
                                />
                            </div>
                            <span className={`${isTools ? 'text-base font-bold' : 'text-sm font-semibold'
                                } text-gray-300 group-hover/item:text-white transition-colors text-center`}>
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Ambient Glow */}
                <div className={`absolute bottom-0 right-0 w-48 h-48 bg-linear-to-br ${category.color} opacity-10 blur-[100px] pointer-events-none`} />
            </div>
        </motion.div>
    )
}

const SkillsMemo = () => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="skills" className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden snap-start">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 -left-20 w-60 h-60 md:w-80 md:h-80 bg-purple-600/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 md:w-80 md:h-80 bg-blue-600/5 rounded-full blur-[60px] md:blur-[80px] pointer-events-none" />

            <div className="max-w-7xl w-full px-6 z-10 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
                        Mastery & Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
                        TECHNICAL{" "}
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-pink-500 to-orange-500">
                            ARSENAL.
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium">
                        Leveraging cutting-edge technologies to build performant,
                        scalable, and visually stunning digital experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} index={isMobile ? 0 : index} isMobile={isMobile} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default React.memo(SkillsMemo)
