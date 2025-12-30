'use client'
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { Send, Download } from 'lucide-react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

export default function Contact() {
    const formRef = useRef<HTMLFormElement>(null)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)

    const [success, setSuccess] = useState(false)

    const handleChange = (e: any) => {
        const { name, value } = e.target
        setForm({ ...form, [name]: value })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        setLoading(true)

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            formRef.current as HTMLFormElement,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then(() => {
                setLoading(false)
                setSuccess(true)
                setForm({ name: '', email: '', message: '' })
                setTimeout(() => setSuccess(false), 5000)
            }, (error) => {
                setLoading(false)
                console.error('EmailJS Error:', error)
                alert('Something went wrong. Please try again.')
            })
    }

    return (
        <section id="contact" className="relative w-full min-h-screen flex flex-col justify-center items-center p-10 bg-transparent snap-start">
            <div className="max-w-7xl w-full z-10 flex flex-col md:flex-row gap-10 overflow-hidden pointer-events-auto">
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex-[0.75] bg-[#191924]/80 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-gray-800"
                >
                    <p className="text-[14px] md:text-[18px] text-gray-400 uppercase tracking-wider">Get in touch</p>
                    <h3 className="text-white font-black text-[30px] xs:text-[40px] sm:text-[50px] md:text-[60px]">Contact.</h3>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="What's your name?"
                                className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 font-medium focus:border-purple-500 focus:bg-black/60 transition-all duration-300"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="What's your email?"
                                className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 font-medium focus:border-purple-500 focus:bg-black/60 transition-all duration-300"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Your Message</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What do you want to say?"
                                className="bg-black/40 py-4 px-6 placeholder:text-gray-500 text-white rounded-lg outline-none border border-white/10 font-medium resize-none focus:border-purple-500 focus:bg-black/60 transition-all duration-300"
                            />
                        </label>

                        <button
                            type="submit"
                            disabled={loading || success}
                            className={`py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl flex items-center gap-2 transform transition-all duration-300 ${success ? 'bg-green-600' : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30'
                                }`}
                        >
                            {loading ? 'Sending...' : success ? 'Message Sent!' : 'Send'}
                            {!success && !loading && <Send size={18} />}
                            {success && <span className="text-xl">✓</span>}
                        </button>
                    </form>
                </motion.div>

                <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex-[0.75] flex items-center justify-center p-8 text-center"
                >
                    <div>
                        <h3 className="text-2xl text-white mb-4">Let's build something amazing together!</h3>
                        <p className="text-gray-400">
                            Reach out for collaborations, freelance work, or just a friendly chat.
                            I'm always open to discussing new projects and creative ideas.
                        </p>
                        <Link
                            href="mailto:anubhavrajsinghu@gmail.com"
                            className="text-purple-400 hover:text-purple-300 font-medium mt-4 block text-lg transition-colors duration-300"
                        >
                            anubhavrajsinghu@gmail.com
                        </Link>
                        <div className="mt-10 flex flex-col items-center gap-4">
                            <a
                                href="/assets/resume.pdf"
                                download="Anubhav_Resume"
                                className="group/btn relative inline-flex items-center justify-center px-8 py-3 font-bold text-white transition-all duration-300 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 hover:border-purple-500/50 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]"
                            >
                                <span className="flex items-center gap-2">
                                    Download Resume <Download size={18} className="group-hover/btn:translate-y-1 transition-transform" />
                                </span>
                            </a>
                            <div className="text-6xl animate-bounce mt-4">
                                ✉️
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
