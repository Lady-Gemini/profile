"use client";

import { Globe } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";
import { motion } from "framer-motion";

export function Languages() {
  const languages = [
    { lang: "Urdu", level: "Native_Speaker", glow: true, progress: 100 },
    { lang: "English", level: "Fluent_Execution", glow: false, progress: 85 },
    { lang: "Punjabi", level: "Fluent_Execution", glow: false, progress: 90 }
  ];

  return (
    <CollapsibleSection title="Config.Languages" icon={Globe} index={5} defaultOpen={false}>
      <div className="space-y-4 pt-4">
        {languages.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 * i }}
            className={`relative overflow-hidden flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 md:p-6 rounded-[1.5rem] backdrop-blur-md border transition-all duration-300 group ${
              item.glow 
                ? 'bg-white/50 dark:bg-[#3E5B4C]/50 border-[#F4B400]/30 hover:border-[#F4B400] hover:shadow-[0_0_20px_rgba(244,180,0,0.15)] z-10' 
                : 'bg-white/20 dark:bg-[#2F4A3F]/30 border-[#1A1A1A]/5 dark:border-[#FAF7F0]/5 hover:border-[#C06A3A]/30 dark:hover:border-[#F4B400]/20'
            }`}
          >
            {/* Background progress bar hint */}
            <div 
              className={`absolute top-0 left-0 h-full w-full opacity-[0.03] dark:opacity-[0.05] pointer-events-none transition-all duration-1000 ${item.glow ? 'bg-gradient-to-r from-[#F4B400] to-transparent' : 'bg-gradient-to-r from-[#1A1A1A] dark:from-[#FAF7F0] to-transparent'}`}
              style={{ width: `${item.progress}%` }}
            ></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className={`p-3 rounded-xl ${item.glow ? 'bg-[#F4B400]/20 text-[#C06A3A] dark:text-[#F4B400]' : 'bg-[#1A1A1A]/5 dark:bg-[#FAF7F0]/10 text-[#7A8F85] dark:text-[#E5DED3]'}`}>
                <Globe size={20} className={item.glow ? "group-hover:rotate-180 transition-transform duration-700" : ""} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-[#1A1A1A] dark:text-[#FAF7F0]">{item.lang}</span>
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-6 relative z-10">
              <div className="w-24 h-1.5 bg-[#1A1A1A]/10 dark:bg-[#FAF7F0]/10 rounded-full overflow-hidden hidden md:block">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.progress}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                  className={`h-full rounded-full ${item.glow ? 'bg-[#F4B400]' : 'bg-[#7A8F85] dark:bg-[#E5DED3]'}`}
                ></motion.div>
              </div>
              
              <span className={`font-mono text-sm font-bold px-4 py-2 rounded-xl border backdrop-blur-sm shadow-sm ${
                item.glow 
                  ? 'bg-[#F4B400]/10 text-[#C06A3A] dark:text-[#F4B400] border-[#F4B400]/30' 
                  : 'bg-white/50 dark:bg-[#1A1A1A]/20 text-[#7A8F85] dark:text-[#E5DED3] border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10'
              }`}>
                {item.level}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </CollapsibleSection>
  );
}