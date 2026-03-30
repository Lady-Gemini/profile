"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { education } from "@/lib/site-data";
import { GraduationCap } from "lucide-react";

export default function EducationPage() {
  return (
    <div className="space-y-12">
      <PageHeader
        eyebrow="Academic Background"
        title="Education History"
        description="Fostering a strong foundation in business administration and commerce to drive strategic decisions and operational excellence."
      />

      <div className="relative border-l border-[#1A1A1A]/10 dark:border-[#FAF7F0]/30 ml-4 md:ml-6 pl-8 md:pl-12 space-y-14 pb-10">
        {education.map((item, index) => (
          <motion.article
            key={item.degree}
            initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline node */}
            <div className="absolute -left-[54px] md:-left-[70px] flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D9A441] bg-[#FAF7F0] dark:bg-[#2F4A3F] text-[#C06A3A] dark:text-[#F4B400] shadow-[0_0_15px_rgba(217,164,65,0.3)]">
              <GraduationCap size={18} />
            </div>

            <div className="space-y-3 bg-white/50 dark:bg-[#3E5B4C]/30 backdrop-blur-md border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 p-6 md:p-8 rounded-[2rem] hover:border-[#D9A441] hover:shadow-[0_0_20px_rgba(217,164,65,0.15)] transition-all duration-300">
              <div className="inline-block rounded-full bg-[#D9A441]/10 border border-[#D9A441]/30 px-3 py-1 text-xs font-bold tracking-widest text-[#C06A3A] dark:text-[#F4B400] uppercase mb-1">
                {item.period}
              </div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#1A1A1A] dark:text-[#FAF7F0] leading-tight">
                {item.degree}
              </h3>
              {(item as any).subtitle && (
                <p className="text-base text-[#C06A3A] dark:text-[#D9A441] font-semibold leading-relaxed -mt-1 mb-2">
                  {(item as any).subtitle}
                </p>
              )}
              <p className="text-[#1A1A1A]/80 dark:text-[#FAF7F0]/80 font-medium text-lg flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D9A441] inline-block"></span>
                {item.institution}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
