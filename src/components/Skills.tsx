"use client";

import { Code2, Terminal } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";
import { motion } from "framer-motion";

export function Skills() {
  const sections = [
    {
      title: "technical_modules",
      skills: ["MS Office Suite", "Digital Research", "Data Entry", "Proofreading"],
      delay: 0.1
    },
    {
      title: "soft_skills",
      skills: ["Communication", "Time Management", "Prioritization", "Client Relations"],
      delay: 0.2
    },
    {
      title: "operational_routines",
      skills: ["Workflow Organization", "Record Keeping", "Cross-functional Collaboration"],
      fullWidth: true,
      delay: 0.3
    }
  ];

  return (
    <CollapsibleSection title="Load_Dependencies()" icon={Code2} index={4} defaultOpen={false}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
        {sections.map((sec, idx) => (
          <div key={idx} className={`space-y-5 ${sec.fullWidth ? 'md:col-span-2' : ''}`}>
            <motion.h3 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sec.delay }}
              className="text-sm md:text-base font-mono font-bold text-[#C06A3A] dark:text-[#F4B400] flex items-center gap-3 tracking-wide"
            >
              <Terminal size={16} className="text-[#1A1A1A]/30 dark:text-[#FAF7F0]/30" /> 
              {sec.title}
            </motion.h3>
            
            <div className="flex flex-wrap gap-3">
              {sec.skills.map((skill, sIdx) => (
                <motion.div
                  key={sIdx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: sec.delay + (sIdx * 0.05) }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group relative cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F4B400] to-[#E97A5A] rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <span className="relative block px-4 py-2.5 bg-white/40 dark:bg-[#3E5B4C]/40 backdrop-blur-sm border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 rounded-xl text-[#1A1A1A] dark:text-[#FAF7F0] text-sm md:text-base font-mono font-semibold group-hover:border-[#F4B400]/50 group-hover:text-[#C06A3A] dark:group-hover:text-[#F4B400] shadow-sm transition-all duration-300">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CollapsibleSection>
  );
}