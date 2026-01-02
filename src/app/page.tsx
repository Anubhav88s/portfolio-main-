'use client'

import dynamic from 'next/dynamic'

import Scene from '@/components/canvas/Scene'
import Stars from '@/components/canvas/Stars'
import { motion } from 'framer-motion'
import React from 'react'
import { Download } from 'lucide-react'
import Navbar from '@/components/Navbar'
const FloatingSocials = dynamic(() => import('@/components/FloatingSocials'), { ssr: false })
const About = dynamic(() => import('@/components/About'), { ssr: false })
const Experience = dynamic(() => import('@/components/Experience'), { ssr: false })
const Projects = dynamic(() => import('@/components/Projects'), { ssr: false })
const Skills = dynamic(() => import('@/components/Skills'), { ssr: false })
const Contact = dynamic(() => import('@/components/Contact'), { ssr: false })
const Footer = dynamic(() => import('@/components/Footer'), { ssr: false })
const SplineScene = dynamic(() => import('@/components/SplineScene'), { ssr: false })




export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);
  const [showSpline, setShowSpline] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 600;
      setIsMobile(mobile);
      setShowSpline(!mobile);
    };

    // Use an optimized resize listener
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    checkMobile();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  return (
    <main className="relative w-full min-h-screen text-white bg-black overflow-x-hidden">
      <Navbar />
      <FloatingSocials />

      {/* Star Background: Always enabled as it's very light */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Scene>
          <Stars />
        </Scene>
      </div>





      {/* 
        Main Page Content 
        Using normal flow with Smooth Scroll (Lenis) for a premium feel
        pointer-events-none on this layer allows events to reach Spline
      */}
      <div className="relative z-10 w-full pointer-events-none">

        {/* Hero Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative snap-start">
          {/* Heavy Spline Model: Optimized loading & unmounting */}
          {showSpline && (
            <SplineScene scene="https://prod.spline.design/w4XzV4rpmJ6ohp8I/scene.splinecode" />
          )}

          <div className="text-center z-20 pointer-events-auto px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black mb-2">
              <span className="bg-clip-text text-transparent bg-linear-to-r from-purple-400 to-pink-600 drop-shadow-2xl">
                FULL STACK
              </span>
            </h1>
            <div className="flex justify-center overflow-hidden perspective-[1000px]">
              {Array.from("DEVELOPER").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, rotateX: -90, y: 50 }}
                  animate={{ opacity: 1, rotateX: 0, y: 0 }}
                  transition={{
                    duration: isMobile ? 0.4 : 0.8,
                    delay: index * 0.05,
                    type: isMobile ? "tween" : "spring",
                    stiffness: 150,
                    damping: 15,
                    ease: isMobile ? "easeOut" : undefined
                  }}
                  className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent drop-shadow-2xl inline-block origin-bottom transform-style-3d"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <p className="mt-8 text-base sm:text-xl text-purple-200/80 font-medium tracking-wide bg-white/5 py-3 px-8 rounded-full inline-block border border-white/10 hover:border-purple-500/50 transition-colors duration-300 will-change-transform">
              Hey, I am Anubhav Raj Singh
            </p>
            <div className="mt-12 flex justify-center">
              <motion.a
                href="/assets/resume.pdf"
                download="Anubhav_Resume"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, type: "spring", stiffness: 200, damping: 15 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white bg-white/5 border border-white/10 rounded-full overflow-hidden will-change-transform"
              >
                <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-3 z-10">
                  Download Resume <Download size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
                </span>
              </motion.a>
            </div>
          </div>

          <div className="absolute bottom-10 left-0 w-full flex justify-center pointer-events-none">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className="w-[35px] h-[64px] rounded-3xl border-4 border-white/20 flex justify-center items-start p-2 backdrop-blur-sm"
            >
              <motion.div
                animate={{ y: [0, 24, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
            </motion.div>
          </div>
        </section>

        {/* Individual components will have pointer-events-auto where needed */}
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
