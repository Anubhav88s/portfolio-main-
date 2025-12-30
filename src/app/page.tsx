'use client'

import dynamic from 'next/dynamic'

import Scene from '@/components/canvas/Scene'
import Stars from '@/components/canvas/Stars'
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <div className="w-full h-full flex items-center justify-center text-white/20">Loading 3D Scene...</div>
})
import { motion } from 'framer-motion'
import React from 'react'
import { Download } from 'lucide-react'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingSocials from '@/components/FloatingSocials'
import WatermarkBlocker from '@/components/WatermarkBlocker'




export default function Home() {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative w-full min-h-screen text-white bg-black">
      <Navbar />
      <FloatingSocials />

      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Scene>
          <Stars />
        </Scene>
      </div>

      <div className="fixed top-0 left-0 w-full h-full z-[1] pointer-events-auto opacity-80">
        <Spline
          scene="https://prod.spline.design/w4XzV4rpmJ6ohp8I/scene.splinecode"
        />
      </div>

      <WatermarkBlocker />

      {/* 
        Main Page Content 
        Using normal flow with Smooth Scroll (Lenis) for a premium feel
        pointer-events-none on this layer allows events to reach Spline
      */}
      <div className="relative z-10 w-full pointer-events-none">

        {/* Hero Section */}
        <section className="h-screen w-full flex flex-col items-center justify-center relative snap-start">
          <div className="text-center z-20 pointer-events-auto px-6">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 drop-shadow-2xl">
              FULL STACK
            </h1>
            <div className="flex justify-center overflow-hidden">
              {Array.from("DEVELOPER").map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                    ease: [0.2, 0.65, 0.3, 0.9],
                  }}
                  className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent drop-shadow-2xl inline-block"
                  style={{ WebkitTextStroke: '1px rgba(255,255,255,0.3)' }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
            <p className="mt-6 text-base sm:text-xl text-purple-400 font-medium tracking-wide bg-black/40 backdrop-blur-md py-2 px-8 rounded-full inline-block border border-purple-500/20 shadow-[0_0_20px_rgba(168,85,247,0.15)]">
              Hey I am Anubhav Raj Singh
            </p>
            <div className="mt-10">
              <motion.a
                href="/assets/resume.pdf"
                download="Anubhav_Resume"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0.5 : 1.5, duration: 0.8 }}
                className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-white transition-all duration-300 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transform hover:-translate-y-1"
              >
                <span className="flex items-center gap-3">
                  Download Resume <Download size={20} className="group-hover:translate-y-1 transition-transform" />
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
