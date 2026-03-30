"use client";

import { GraduationCap, Database } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";
import { motion } from "framer-motion";

export function Education() {
  const edus = [
    {
      degree: "Bachelor of Business Administration (BBA)",
      desc: "2-Year Program | 2023 - 2025",
      inst: "Punjab University, Commerce Campus",
      glow: true
    },
    {
      degree: "Bachelor of Commerce (B.Com)",
      desc: "2014 - 2017",
      inst: "University of Gujrat, Marghazar Campus",
      glow: false
    }
  ];

  return (
    <CollapsibleSection title="Knowledge_Base.edu" icon={GraduationCap} index={3} defaultOpen={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {edus.map((edu, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className={`relative p-8 rounded-[1.5rem] backdrop-blur-md border transition-all duration-500 overflow-hidden group ${
              edu.glow 
                ? 'bg-white/60 dark:bg-[#3E5B4C]/40 border-[#F4B400]/30 hover:border-[#F4B400]/70 hover:shadow-[0_0_30px_rgba(244,180,0,0.15)] z-10' 
                : 'bg-white/30 dark:bg-[#2F4A3F]/30 border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 hover:border-[#C06A3A]/40'
            }`}
          >
            {edu.glow && (
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-24 h-24 bg-[#F4B400]/20 rounded-full blur-[30px] group-hover:bg-[#F4B400]/40 transition-colors duration-500"></div>
            )}
            
            <div className={`p-4 rounded-2xl w-fit mb-6 ${edu.glow ? 'bg-[#F4B400]/10 text-[#F4B400]' : 'bg-[#1A1A1A]/5 dark:bg-[#FAF7F0]/5 text-[#7A8F85] dark:text-[#E5DED3]'}`}>
              <Database size={28} className={edu.glow ? "group-hover:animate-pulse" : "group-hover:scale-110 transition-transform"} />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 text-[#1A1A1A] dark:text-[#FAF7F0]">{edu.degree}</h3>
            
            <div className={`font-mono text-xs font-semibold mb-6 inline-block px-3 py-1.5 rounded-lg border backdrop-blur-sm ${
              edu.glow 
                ? 'bg-[#F4B400]/10 text-[#C06A3A] dark:text-[#F4B400] border-[#F4B400]/20' 
                : 'bg-black/5 dark:bg-white/5 text-[#7A8F85] dark:text-[#E5DED3] border-transparent'
            }`}>
              {edu.desc}
            </div>
            
            <p className="text-[#7A8F85] dark:text-[#E5DED3] text-sm font-medium mt-auto">
              {edu.inst}
            </p>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}