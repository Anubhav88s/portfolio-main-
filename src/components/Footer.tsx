import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <section className="w-full py-10 text-secondary bg-[#050511] border-t border-white/10 z-10 relative flex flex-col justify-center items-center snap-start">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 px-6 w-full pointer-events-auto">
                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
                    <p className="text-[14px] text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()} Anubhav. All rights reserved.
                    </p>
                    <span className="hidden md:inline text-gray-600">|</span>
                    <div className="flex items-center gap-2">
                        <span className="text-[14px] text-gray-500">Contact us:</span>
                        <Link
                            href="mailto:anubhavrajsinghu@gmail.com"
                            className="text-[14px] text-gray-400 hover:text-white transition-colors duration-300"
                        >
                            anubhavrajsinghu@gmail.com
                        </Link>
                    </div>
                </div>

                <div className="flex gap-6">
                    <Link
                        href="https://github.com/Anubhav88s"
                        target="_blank"
                        className="text-gray-400 hover:text-white hover:glow-github p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        <Github size={20} />
                    </Link>
                    <Link
                        href="https://x.com/anubhav741"
                        target="_blank"
                        className="text-gray-400 hover:text-white hover:glow-twitter p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="w-5 h-5 fill-current"
                        >
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                        </svg>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/anubhav-raj-singh-88a03b2b5/"
                        target="_blank"
                        className="text-gray-400 hover:text-white hover:glow-linkedin p-2 rounded-full hover:bg-white/10 transition-all duration-300"
                    >
                        <Linkedin size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Footer;
