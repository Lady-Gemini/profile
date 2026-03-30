"use client";

import { Users } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";

export function About() {
  return (
    <CollapsibleSection title="System.About()" icon={Users} index={1} defaultOpen={true}>
      <div className="relative p-6 md:p-8 rounded-2xl bg-white/20 dark:bg-[#3E5B4C]/20 border border-[#FAF7F0]/30 dark:border-[#2F4A3F] shadow-inner">
        <div className="absolute top-0 left-6 w-12 h-1 bg-gradient-to-r from-[#F4B400] to-transparent rounded-full -translate-y-1/2"></div>
        <p className="text-[#7A8F85] dark:text-[#E5DED3] text-lg md:text-xl leading-relaxed font-medium md:leading-loose">
          Highly motivated and detail-oriented Business Administration graduate seeking an entry-level position in a dynamic, growth-oriented organization.{" "}
          <span className="relative inline-block text-[#C06A3A] dark:text-[#F4B400] font-bold group">
            <span className="relative z-10 transition-colors">Eager to leverage a strong academic foundation</span>
            <span className="absolute bottom-0 left-0 w-full h-1/3 bg-[#F4B400]/20 dark:bg-[#F4B400]/30 -z-0 group-hover:h-full transition-all duration-300"></span>
          </span>{" "}
          in commerce and business management to drive operational efficiency, support strategic objectives, and continuously develop advanced professional competencies.
        </p>
      </div>
    </CollapsibleSection>
  );
}