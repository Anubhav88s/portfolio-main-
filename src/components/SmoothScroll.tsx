'use client'

import { ReactLenis } from 'lenis/react'
import { ReactNode, useState, useEffect } from 'react'

export default function SmoothScroll({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
        setIsMobile(window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768)
    }, [])

    if (!isMounted || isMobile) {
        return <>{children}</>
    }

    return (
        <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true, wheelMultiplier: 1.1 }}>
            {children}
        </ReactLenis>
    )
}
