import { PageHeader } from "@/components/PageHeader";
import { InfoAccordion } from "@/components/InfoAccordion";
import { experiences } from "@/lib/site-data";

export default function ExperiencePage() {
  return (
    <div className="space-y-5">
      <PageHeader
        eyebrow="Experience"
        title="Hands-on roles with measurable impact"
        description="Professional experience focused on operations support, customer interaction, and quality execution."
      />

      {experiences.map((item, index) => (
        <InfoAccordion
          key={item.role}
          title={item.role}
          subtitle={`${item.company} • ${item.period}`}
          defaultOpen={index === 0}
        >
          <ul className="space-y-3">
            {item.points.map((point) => (
              <li key={point} className="rounded-xl bg-[#F2E9DC]/75 dark:bg-[#2F4A3F]/60 p-4 text-sm leading-7">
                {point}
              </li>
            ))}
          </ul>
        </InfoAccordion>
      ))}
    </div>
  );
}
