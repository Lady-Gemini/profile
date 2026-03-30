"use client";

import { motion } from "framer-motion";
import { PageHeader } from "@/components/PageHeader";
import { highlights } from "@/lib/site-data";

export default function ProjectsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Highlights"
        title="Professional highlights from CV"
        description="A concise view of profile strengths, work experience themes, and career focus areas drawn from the CV."
      />

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            whileHover={{ y: -6 }}
            className="group rounded-3xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-white/60 dark:bg-[#3E5B4C]/40 p-5 shadow-sm hover:shadow-xl hover:shadow-[#F4B400]/10"
          >
            <h3 className="text-xl font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#1A1A1A]/70 dark:text-[#FAF7F0]/75">{item.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D9A441]/30 bg-[#F2E9DC] dark:bg-[#2F4A3F] px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
