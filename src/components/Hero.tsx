"use client";

import { motion } from "framer-motion";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export function Hero() {
  const textVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.1, duration: 0.8 },
    }),
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 100, delay: 0.1 } }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 pb-10">
      <div className="w-full flex flex-col md:flex-row items-center gap-12 lg:gap-20 relative z-10">
        <div className="flex-1 space-y-8 relative">
          
          <motion.div 
            variants={badgeVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 dark:bg-[#3E5B4C]/60 backdrop-blur-xl border border-[#C06A3A]/20 dark:border-[#D9A441]/20 text-[#C06A3A] dark:text-[#F4B400] font-mono text-xs font-black tracking-[0.2em] shadow-lg shadow-[#F4B400]/10"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-full h-full bg-[#F4B400] rounded-full animate-ping opacity-30"></div>
              <Zap size={14} className="text-[#F4B400]" /> 
            </div>
            SYSTEM.STATUS: ONLINE
          </motion.div>

          <div className="space-y-4">
            <motion.h1 
              custom={1} variants={textVariants} initial="hidden" animate="visible"
              className="text-6xl md:text-8xl lg:text-[7rem] font-black tracking-tighter leading-[0.95] text-[#1A1A1A] dark:text-[#FAF7F0]"
            >
              Rida Shahid<span className="text-[#C06A3A] dark:text-[#F4B400]">.</span>
            </motion.h1>
            
            <motion.div 
              custom={2} variants={textVariants} initial="hidden" animate="visible"
              className="text-2xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#C06A3A] via-[#E97A5A] to-[#E3A72F] dark:from-[#D9A441] dark:via-[#F4B400] dark:to-[#E3A72F] w-fit pr-4"
            >
              Business Architect
            </motion.div>
          </div>

          <motion.p 
            custom={3} variants={textVariants} initial="hidden" animate="visible"
            className="text-lg md:text-xl text-[#7A8F85] dark:text-[#E5DED3] font-medium max-w-2xl leading-relaxed border-l-4 border-[#F4B400] pl-6"
          >
            Bridging the gap between robust operational frameworks and cutting-edge digital execution. Eager to drive strategic growth through data and management.
          </motion.p>
          
          <motion.div 
            custom={4} variants={textVariants} initial="hidden" animate="visible"
            className="flex flex-wrap items-center gap-4 pt-4"
          >
            {[
              { icon: Phone, text: "+92 313 7946587", href: "tel:+923137946587" },
              { icon: Mail, text: "ridasa786@gmail.com", href: "mailto:ridasa786@gmail.com" },
              { icon: MapPin, text: "Lahore, PK", href: null },
            ].map((item, idx) => {
              const Content = (
                <div className="relative overflow-hidden group flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/50 dark:bg-[#3E5B4C]/30 backdrop-blur border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 shadow-sm hover:shadow-[#F4B400]/20 hover:border-[#F4B400]/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 dark:via-[#F4B400]/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <item.icon size={18} className="text-[#C06A3A] dark:text-[#D9A441] group-hover:scale-110 transition-transform" /> 
                  <span className="font-mono text-sm font-semibold">{item.text}</span>
                </div>
              );
              return item.href ? (
                <a key={idx} href={item.href} className="outline-none block hover:-translate-y-1 transition-transform">{Content}</a>
              ) : (
                <div key={idx} className="cursor-default hover:-translate-y-1 transition-transform">{Content}</div>
              );
            })}
          </motion.div>
        </div>

        {/* Parallax Holographic Sphere graphic container can go here if needed, keeping it minimal for now. */}
      </div>
    </section>
  );
}