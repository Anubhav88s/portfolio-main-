'use client'

import { useEffect, useState } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export default function CustomCursor() {
    const [isHovered, setIsHovered] = useState(false)
    const [isVisible, setIsVisible] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    // Smooth movement for the outer ring
    const springConfig = { damping: 25, stiffness: 200 }
    const cursorX = useSpring(mouseX, springConfig)
    const cursorY = useSpring(mouseY, springConfig)

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
            setIsMobile(mobile)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)

        const moveMouse = (e: MouseEvent) => {
            mouseX.set(e.clientX)
            mouseY.set(e.clientY)
            if (!isVisible) setIsVisible(true)
        }

        const handleHover = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('pointer-events-auto') && !target.classList.contains('cursor-none')

            setIsHovered(!!isClickable)
        }

        window.addEventListener('mousemove', moveMouse)
        window.addEventListener('mouseover', handleHover)

        return () => {
            window.removeEventListener('mousemove', moveMouse)
            window.removeEventListener('mouseover', handleHover)
            window.removeEventListener('resize', checkMobile)
        }
    }, [mouseX, mouseY, isVisible])

    if (!isVisible || isMobile) return null

    return (
        <>
            {/* Outer Ring */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/40 pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                    scale: isHovered ? 2 : 1,
                }}
                transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
            />
            {/* Inner Dot */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />
        </>
    )
}
