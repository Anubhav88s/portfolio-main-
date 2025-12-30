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
        ]
    }
]

const TiltCard = ({ category, index }: { category: typeof skillCategories[0], index: number }) => {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return

        const rect = ref.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5

        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateY,
                rotateX,
                transformStyle: "preserve-3d",
            }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group w-full h-full"
        >
            {/* Background Glow */}
            <div className={`absolute -inset-1 rounded-[2rem] bg-gradient-to-r ${category.color} opacity-20 blur-xl group-hover:opacity-40 transition duration-500`} />

            <div className="relative h-full bg-[#0a0a0f]/80 backdrop-blur-2xl border border-white/10 rounded-[2rem] overflow-hidden p-8 flex flex-col group-hover:border-white/20 transition-all duration-500">
                {/* Header Section */}
                <div style={{ transform: "translateZ(50px)" }} className="mb-8">
                    <h3 className={`text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r ${category.color} mb-3`}>
                        {category.title}
                    </h3>
                    <p className="text-gray-400 text-lg font-medium tracking-tight">
                        {category.description}
                    </p>
                </div>

                {/* Skills Grid */}
                <div style={{ transform: "translateZ(30px)" }} className="grid grid-cols-2 gap-4 flex-grow">
                    {category.skills.map((skill, sIndex) => (
                        <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: sIndex * 0.05, duration: 0.2 }}
                            whileHover={{
                                scale: 1.05,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                borderColor: "rgba(255,255,255,0.15)"
                            }}
                            className="flex items-center gap-3 p-3 rounded-2xl bg-white/[0.03] border border-white/[0.05] transition-all cursor-default group/item"
                        >
                            <div className="w-8 h-8 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300 relative">
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    sizes="32px"
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-sm text-gray-300 font-semibold group-hover/item:text-white transition-colors">
                                {skill.name}
                            </span>
                        </motion.div>
                    ))}
                </div>

                {/* Decorative Elements */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-5 blur-3xl`} />
            </div>
        </motion.div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="relative w-full min-h-screen py-16 md:py-24 flex flex-col justify-center items-center overflow-hidden snap-start">
            {/* Ambient Background Lights */}
            <div className="absolute top-1/4 -left-20 w-60 h-60 md:w-80 md:h-80 bg-purple-600/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -right-20 w-60 h-60 md:w-80 md:h-80 bg-blue-600/10 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full px-6 z-10 pointer-events-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16 md:mb-24"
                >
                    <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-gray-400 text-xs md:text-sm font-semibold uppercase tracking-widest mb-4">
                        Mastery & Expertise
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6">
                        TECHNICAL{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-orange-500">
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
                        <TiltCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    )
}
