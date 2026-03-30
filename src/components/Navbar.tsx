"use client";

import { motion } from "framer-motion";
import { Terminal, Sun, Moon, ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 z-50 w-full transition-all duration-500 ${scrolled ? 'py-3' : 'py-6'}`}>
      <div className={`mx-auto max-w-6xl px-6 transition-all duration-500 ${scrolled ? 'w-[95%] md:w-full max-w-5xl rounded-full border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0]/80 dark:bg-[#2F4A3F]/80 backdrop-blur-2xl shadow-lg shadow-[#1A1A1A]/5 dark:shadow-none' : 'bg-transparent'}`}>
        <div className="flex items-center justify-between h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-4 cursor-pointer group"
          >
            <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-[#E3A72F] to-[#D9A441] flex items-center justify-center text-[#1A1A1A] shadow-xl shadow-[#F4B400]/20 overflow-hidden group-hover:shadow-[#F4B400]/40 transition-shadow duration-300">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <Terminal size={22} className="stroke-[2.5] relative z-10" />
            </div>
            <span className="font-mono font-bold text-2xl tracking-tighter text-[#1A1A1A] dark:text-[#FAF7F0]">
              RIDA<span className="text-[#C06A3A]">_DEV</span>
            </span>
          </motion.div>

          <nav className="flex items-center gap-4 md:gap-6">
            {mounted && (
              <motion.button
                whileHover={{ scale: 1.1, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.6 }}
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="relative flex items-center justify-center w-11 h-11 rounded-full bg-[#F2E9DC] dark:bg-[#3E5B4C] border border-[#1A1A1A]/5 dark:border-[#FAF7F0]/5 text-[#C06A3A] dark:text-[#E3A72F] shadow-inner hover:shadow-[#F4B400]/30 transition-shadow overflow-hidden group"
                aria-label="Toggle Theme"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-[#F4B400]/0 via-[#F4B400]/10 to-[#F4B400]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {theme === 'dark' ? <Sun size={20} className="relative z-10" /> : <Moon size={20} className="relative z-10" />}
              </motion.button>
            )}
            
            <motion.a 
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              href="mailto:ridasa786@gmail.com" 
              className="relative hidden sm:flex items-center gap-3 px-6 py-3 rounded-full bg-[#1A1A1A] dark:bg-[#FAF7F0] text-[#FAF7F0] dark:text-[#1A1A1A] font-bold text-sm tracking-wide group overflow-hidden shadow-lg shadow-[#1A1A1A]/10 dark:shadow-[#FAF7F0]/10 hover:shadow-[#F4B400]/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 dark:via-[#1A1A1A]/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="relative z-10">INITIATE_CONTACT</span> 
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 group-hover:text-[#F4B400] transition-all" />
            </motion.a>
          </nav>
        </div>
      </div>
    </header>
  );
}