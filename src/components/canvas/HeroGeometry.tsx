'use client'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Sphere, Float } from '@react-three/drei'

export default function HeroGeometry() {
    const ref = useRef<any>(null)

    useFrame((state) => {
        if (ref.current) {
            // ref.current.rotation.x = state.clock.getElapsedTime() * 0.2
        }
    })

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={ref} args={[1, 64, 64]} scale={2.5} position={[0, 0, 0]}>
                <MeshDistortMaterial
                    color="#6d28d9"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                    emissive="#4c1d95"
                    emissiveIntensity={0.5}
                />
            </Sphere>
        </Float>
    )
}
