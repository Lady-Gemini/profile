"use client";

import { Briefcase, ArrowRight } from "lucide-react";
import { CollapsibleSection } from "./CollapsibleSection";

export function Experience() {
  const experiences = [
    {
      title: "Banking Intern",
      duration: "3_MONTHS",
      company: "MCB Bank (Bhimber Road, Gujrat)",
      tasks: [
        "Facilitated daily banking operations and provided comprehensive customer service support.",
        "Managed financial records, ensured data accuracy, and streamlined documentation processes."
      ]
    },
    {
      title: "Educator",
      duration: "11_MONTHS",
      company: "Allied School (Jinnah Campus)",
      tasks: [
        "Designed and delivered engaging lesson plans while effectively managing classroom dynamics.",
        "Fostered a collaborative learning environment, enhancing student engagement and academic performance."
      ]
    }
  ];

  return (
    <CollapsibleSection title="Execution_History.log" icon={Briefcase} index={2} defaultOpen={true}>
      <div className="relative pl-8 md:pl-12 py-4">
        {/* Timeline track */}
        <div className="absolute inset-y-0 left-[15px] md:left-[23px] w-0.5 bg-gradient-to-b from-[#F4B400] via-[#F4B400]/30 to-transparent"></div>
        
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group/card cursor-default">
              {/* Node indicator */}
              <div className="absolute -left-[33px] md:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-[#FAF7F0] dark:bg-[#2F4A3F] border-4 border-[#C06A3A] dark:border-[#F4B400] shadow-[0_0_15px_rgba(244,180,0,0.6)] group-hover/card:scale-125 group-hover/card:border-[#F4B400] dark:group-hover/card:border-[#D9A441] transition-transform duration-300" />
              
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-3 gap-3">
                <h3 className="text-2xl font-black text-[#1A1A1A] dark:text-[#FAF7F0] tracking-tight group-hover/card:translate-x-2 transition-transform duration-300">
                  {exp.title}
                </h3>
                <span className="font-mono text-xs font-bold px-3 py-1.5 bg-[#C06A3A]/10 dark:bg-[#F4B400]/10 text-[#C06A3A] dark:text-[#F4B400] rounded-lg border border-[#C06A3A]/20 dark:border-[#F4B400]/20 shadow-sm backdrop-blur-md">
                  {exp.duration}
                </span>
              </div>
              
              <p className="text-[#C06A3A] dark:text-[#D9A441] font-mono text-sm mb-5 font-semibold tracking-wide">
                @ {exp.company}
              </p>
              
              <ul className="space-y-4">
                {exp.tasks.map((task, tIdx) => (
                  <li key={tIdx} className="flex items-start gap-4 text-[#7A8F85] dark:text-[#E5DED3] text-base group-hover/card:text-[#1A1A1A] dark:group-hover/card:text-[#FAF7F0] transition-colors duration-300">
                    <ArrowRight size={18} className="mt-1 text-[#F4B400] shrink-0 opacity-70 group-hover/card:opacity-100 group-hover/card:translate-x-1 transition-all" /> 
                    <span className="leading-relaxed">{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </CollapsibleSection>
  );
}