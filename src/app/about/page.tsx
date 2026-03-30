import { PageHeader } from "@/components/PageHeader";
import { InfoAccordion } from "@/components/InfoAccordion";
import { education } from "@/lib/site-data";

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
              className="rounded-2xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0]/70 dark:bg-[#2F4A3F]/45 p-5"
            >
              <h3 className="font-semibold text-lg">{item.degree}</h3>
              <p className="mt-2 text-sm text-[#C06A3A] dark:text-[#F4B400]">{item.period}</p>
              <p className="mt-1 text-sm text-[#1A1A1A]/65 dark:text-[#FAF7F0]/75">{item.institution}</p>
            </article>
          ))}
        </div>
      </InfoAccordion>
    </div>
  );
}
