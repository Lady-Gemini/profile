import { PageHeader } from "@/components/PageHeader";
import { InfoAccordion } from "@/components/InfoAccordion";
import { education } from "@/lib/site-data";
import { GraduationCap } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="About"
        title="Business Administration graduate"
        description="Committed to supporting administrative operations, contributing to organizational goals, and assisting in teaching or training environments."
      />

      <InfoAccordion title="Profile" subtitle="Who I am and how I work" defaultOpen>
        <p className="leading-8 text-[#1A1A1A]/80 dark:text-[#FAF7F0]/85">
          Motivated and detail-oriented Business Administration graduate seeking an entry-level position in a dynamic organization or educational setting. Brings a strong academic foundation in commerce and business management, with the ability to support administrative operations and contribute through effective communication, organization, and teamwork.
        </p>
      </InfoAccordion>

      <InfoAccordion title="Education" subtitle="Academic background">
        <div className="grid gap-4 md:grid-cols-2">
          {education.map((item) => (
            <article
              key={item.degree}
              className="rounded-2xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0]/70 dark:bg-[#2F4A3F]/45 p-5 space-y-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D9A441]/30 bg-[#D9A441]/10 text-[#C06A3A] dark:text-[#F4B400]">
                <GraduationCap size={18} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-[#1A1A1A] dark:text-[#FAF7F0]">{item.degree}</h3>
              {item.subtitle ? (
                <p className="text-sm font-semibold text-[#C06A3A] dark:text-[#D9A441]">{item.subtitle}</p>
              ) : null}
              <p className="inline-flex rounded-full bg-[#D9A441]/10 px-3 py-1 text-xs font-bold tracking-widest text-[#C06A3A] dark:text-[#F4B400] uppercase">
                {item.period}
              </p>
              <p className="text-sm text-[#1A1A1A]/65 dark:text-[#FAF7F0]/75">{item.institution}</p>
            </article>
          ))}
        </div>
      </InfoAccordion>
    </div>
  );
}
