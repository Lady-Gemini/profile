"use client";

import { Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="relative z-10 border-t border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-white/40 dark:bg-[#2F4A3F]/60 backdrop-blur-2xl py-10 mt-16"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-[#7A8F85] dark:text-[#E5DED3] font-mono text-sm px-4 py-2 bg-white/50 dark:bg-[#1A1A1A]/20 rounded-full border border-[#1A1A1A]/5 dark:border-[#FAF7F0]/5">
          <Terminal size={16} /> 
          <span>Availability: <span className="text-[#22c55e] animate-pulse font-bold">Open to Opportunities</span></span>
        </div>
        
        <div className="text-center md:text-right">
          <p className="text-[#1A1A1A] dark:text-[#FAF7F0] font-semibold tracking-wide">
            Rida Shahid
          </p>
          <p className="mt-1 text-sm font-mono text-[#7A8F85] dark:text-[#E5DED3]">
            Business Administration Graduate
          </p>
        </div>
      </div>
    </motion.footer>
  );
}