"use client";

import { GraduationCap } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";
import { motion } from "framer-motion";
import { education } from "@/lib/site-data";

export function Education() {
  return (
    <CollapsibleSection title="Knowledge_Base.edu" icon={GraduationCap} index={3} defaultOpen={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {education.map((edu, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -5 }}
            className="relative p-8 rounded-[1.5rem] backdrop-blur-md border transition-all duration-500 overflow-hidden group bg-white/50 dark:bg-[#3E5B4C]/35 border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 hover:border-[#D9A441]"
          >
            <div className="p-4 rounded-2xl w-fit mb-6 bg-[#D9A441]/10 text-[#C06A3A] dark:text-[#F4B400]">
              <GraduationCap size={28} className="group-hover:scale-110 transition-transform" />
            </div>
            
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-4 text-[#1A1A1A] dark:text-[#FAF7F0]">{edu.degree}</h3>
            
            {edu.subtitle ? (
              <p className="text-base text-[#C06A3A] dark:text-[#D9A441] font-semibold leading-relaxed mb-3">
                {edu.subtitle}
              </p>
            ) : null}

            <p className="inline-flex rounded-full bg-[#D9A441]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#C06A3A] dark:text-[#F4B400] uppercase mb-4">
              {edu.period}
            </p>
            
            <p className="text-[#7A8F85] dark:text-[#E5DED3] text-sm font-medium mt-auto">
              {edu.institution}
            </p>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}