'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
    { id: 'about', title: 'About' },
    { id: 'work', title: 'Work' },
    { id: 'skills', title: 'Skills' },
    { id: 'contact', title: 'Contact' },
]

export default function Navbar() {
    const [active, setActive] = useState('')
    const [toggle, setToggle] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY
            if (scrollTop > 100) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav
            className={`fixed w-full flex items-center py-5 fixed top-0 z-50 transition-all duration-300 ${scrolled ? 'pt-4' : 'pt-5'}`}
        >
            <div className={`w-full flex justify-between items-center max-w-7xl mx-auto px-6 transition-all duration-300 ${scrolled
                ? 'bg-[#050511]/40 backdrop-blur-md border border-white/5 rounded-full py-3 mt-2 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
                : 'bg-transparent py-5'
                }`}>
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive('')
                        window.scrollTo(0, 0)
                    }}
                >
                    <Image
                        src="/assets/logo.png"
                        alt="Anubhav"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="h-10 w-auto object-contain brightness-110 contrast-110"
                    />
                </Link>

                {/* Desktop Navigation */}
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={`${active === link.title ? 'text-white' : 'text-gray-400'
                                } hover:text-white text-[18px] font-medium cursor-pointer transition-colors`}
                            onClick={() => setActive(link.title)}
                        >
                            <a href={`#${link.id}`}>{link.title}</a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center">
                    <div className="cursor-pointer z-50" onClick={() => setToggle(!toggle)}>
                        {toggle ? <X className="text-white" /> : <Menu className="text-white" />}
                    </div>

                    <div
                        className={`${!toggle ? 'hidden' : 'flex'
                            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl bg-gray-900 border border-gray-800`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    key={link.id}
                                    className={`font-poppins font-medium cursor-pointer text-[16px] ${active === link.title ? 'text-white' : 'text-gray-400'
                                        }`}
                                    onClick={() => {
                                        setToggle(!toggle)
                                        setActive(link.title)
                                    }}
                                >
                                    <a href={`#${link.id}`}>{link.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}
