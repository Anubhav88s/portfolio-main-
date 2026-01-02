'use client'

import dynamic from 'next/dynamic'
import { motion, useInView } from 'framer-motion'
import React, { useRef } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
            />
            <p className="mt-4 text-purple-400/60 font-medium animate-pulse">Initializing Neural Scene...</p>
        </div>
    )
})

interface SplineSceneProps {
    scene: string
    className?: string
}

export default function SplineScene({ scene, className }: SplineSceneProps) {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef);

    return (
        <motion.div
            ref={containerRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1 }}
            className={`absolute top-0 left-0 w-full h-full z-[1] pointer-events-auto ${className || ''}`}
        >
            <Spline scene={scene} renderOnDemand={true} />
            {/* Watermark Blocker: Integrated to ensure it only shows with the Spline scene and doesn't overlap footer */}
            {isInView && (
                <div className="absolute bottom-2 right-2 w-[160px] h-[60px] bg-black bg-opacity-100 pointer-events-none z-[9999] rounded-xl" aria-hidden="true" />
            )}
        </motion.div>
    )
}
