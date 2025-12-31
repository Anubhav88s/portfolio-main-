'use client'

import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import { inSphere } from 'maath/random'

export default function Stars(props: any) {
    const ref = useRef<any>(null)
    const [sphere] = useState(() => {
        // Drastically reduce count on mobile (Samsung M21/Exynos 9611) to maintain 60FPS
        const isMobileDevice = typeof window !== 'undefined' && window.innerWidth < 768;
        const count = isMobileDevice ? 50 : 1000;
        return inSphere(new Float32Array(count * 3), { radius: 1.5 }) as Float32Array
    })

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10
            ref.current.rotation.y -= delta / 15
        }
    })

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    )
}
