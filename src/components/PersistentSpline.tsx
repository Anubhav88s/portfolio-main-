'use client'

import dynamic from 'next/dynamic'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SplineScene = dynamic(() => import('@/components/SplineScene'), { ssr: false })

export default function PersistentSpline() {
    const [isMobile, setIsMobile] = useState(false)
    const [showSpline, setShowSpline] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 550
            setIsMobile(mobile)
            setShowSpline(!mobile)
        }

        // Initial check
        checkMobile()

        // Debounced resize listener
        let timeoutId: NodeJS.Timeout
        const handleResize = () => {
            clearTimeout(timeoutId)
            timeoutId = setTimeout(checkMobile, 150)
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (!showSpline) return null

    return (
        <div className="fixed top-0 left-0 w-full h-full z-1 pointer-events-none">
            <SplineScene scene="https://prod.spline.design/w4XzV4rpmJ6ohp8I/scene.splinecode" />
        </div>
    )
}
