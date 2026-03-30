import { PageHeader } from "@/components/PageHeader";
import { InfoAccordion } from "@/components/InfoAccordion";
import { languages, skillGroups } from "@/lib/site-data";

export default function SkillsPage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Skills"
        title="Core strengths across operations and communication"
        description="A balanced skill set that supports planning, execution, and client-facing collaboration."
      />

      {skillGroups.map((group, index) => (
        <InfoAccordion key={group.title} title={group.title} defaultOpen={index === 0}>
          <div className="flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span
                key={item}
                className="rounded-xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0] dark:bg-[#2F4A3F]/70 px-3 py-2 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </InfoAccordion>
      ))}

      <InfoAccordion title="Languages" subtitle="Communication coverage">
        <div className="grid gap-3 md:grid-cols-3">
          {languages.map((lang) => (
            <article key={lang.name} className="rounded-2xl bg-[#F2E9DC]/80 dark:bg-[#2F4A3F]/65 p-4">
              <p className="font-semibold">{lang.name}</p>
              <p className="text-sm text-[#C06A3A] dark:text-[#F4B400] mt-1">{lang.level}</p>
            </article>
          ))}
        </div>
      </InfoAccordion>
    </div>
  );
}
