'use client'

import { Canvas } from '@react-three/fiber'
import { Preload, AdaptiveDpr } from '@react-three/drei'
import { Suspense } from 'react'

export default function Scene({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            {/* pointer-events-none on container so it doesn't block UI if transparent, 
          but Canvas needs pointer-events-auto for interactions if models are interactive.
          Usually better to have Canvas handle events and UI separate.
          We'll set pointer-events-none on container, but auto on Canvas? 
          Actually, if container is none, children are none? No.
          Detailed strategy: Canvas covers screen. z-index -10. 
      */}
            <Canvas
                camera={{ position: [0, 0, 1] }}
                gl={{
                    antialias: false, // Turn off antialias for better mobile performance
                    alpha: true,
                    powerPreference: 'high-performance',
                    stencil: false,
                    depth: true
                }}
                // Optimize fill-rate on mobile by capping DPR at 1
                dpr={typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : [1, 1.2]}
                className="pointer-events-auto"
                performance={{ min: 0.5 }} // Allow downscaling if performance drops
            >
                <AdaptiveDpr pixelated />
                <Suspense fallback={null}>
                    {children}
                    <Preload all />
                </Suspense>
            </Canvas>
        </div>
    )
}
