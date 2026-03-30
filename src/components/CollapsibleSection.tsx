"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

// Collapsible Section wrapper with futuristic glow and glassmorphism
export function CollapsibleSection({ 
  title, 
  icon: Icon, 
  children, 
  defaultOpen = true, 
  index = 0,
  className
}: any) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "relative rounded-[2rem] overflow-hidden backdrop-blur-3xl shadow-2xl transition-all duration-500",
        "bg-white/40 dark:bg-[#2F4A3F]/40 border border-[#FAF7F0]/50 dark:border-[#3E5B4C]/50",
        "hover:shadow-[#F4B400]/10 dark:hover:shadow-[#F4B400]/5",
        "glow-border group/section",
        className
      )}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-6 md:px-8 md:py-8 flex items-center justify-between cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-5 md:gap-6">
          <div className="relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#E3A72F]/20 to-[#E97A5A]/10 dark:from-[#3E5B4C]/80 dark:to-[#2F4A3F] shadow-inner group-hover/section:scale-110 transition-transform duration-500 will-change-transform">
            <div className="absolute inset-0 rounded-2xl border border-white/20 dark:border-[#E3A72F]/20 mask-border"></div>
            <Icon size={24} className="text-[#C06A3A] dark:text-[#E3A72F] stroke-[2.2]" />
          </div>
          <h2 className="text-xl md:text-3xl font-extrabold uppercase tracking-widest text-[#1A1A1A] dark:text-[#FAF7F0] font-mono">
            {title}
          </h2>
        </div>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }} 
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/50 dark:bg-[#3E5B4C]/50 text-[#7A8F85] dark:text-[#E5DED3] hover:text-[#C06A3A] dark:hover:text-[#E3A72F] transition-colors border border-transparent hover:border-[#F4B400]/30 shadow-sm shadow-[#F4B400]/0 hover:shadow-[#F4B400]/20">
            <ChevronDown size={24} />
          </div>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            animate={{ height: "auto", opacity: 1, filter: "blur(0px)" }}
            exit={{ height: 0, opacity: 0, filter: "blur(4px)" }}
            transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-8 md:px-8 md:pb-10 pt-2 border-t border-[#1A1A1A]/5 dark:border-[#FAF7F0]/5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
