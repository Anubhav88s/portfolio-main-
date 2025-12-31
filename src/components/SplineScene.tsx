'use client'

import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'

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
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1 }}
            className={`fixed top-0 left-0 w-full h-full z-[1] pointer-events-auto ${className || ''}`}
        >
            <Spline scene={scene} renderOnDemand={true} />
        </motion.div>
    )
}
