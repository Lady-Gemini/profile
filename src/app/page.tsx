"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { highlights } from "@/lib/site-data";

const quickLinks = [
  {
    title: "About",
    text: "Learn about my approach, values, and academic background.",
    href: "/about",
  },
  {
    title: "Experience",
    text: "Review practical work history and responsibilities.",
    href: "/experience",
  },
  {
    title: "Skills",
    text: "Explore technical, professional, and operational strengths.",
    href: "/skills",
  },
  {
    title: "Contact",
    text: "Reach out for opportunities and collaborations.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <PageHeader
        eyebrow="Portfolio"
        title="Professional profile and career overview"
        description="Business Administration background with practical experience in banking operations, education, and administrative support."
      />

      {/* Highlighted introduction block */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="rounded-[2rem] border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-white/60 dark:bg-[#3E5B4C]/45 p-6 md:p-8"
      >
        <div className="flex flex-wrap items-center gap-3 text-sm">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2E9DC] dark:bg-[#2F4A3F] px-3 py-1">
            <Sparkles size={14} className="text-[#D9A441]" />
            Professional Profile
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2E9DC] dark:bg-[#2F4A3F] px-3 py-1">
            <Layers size={14} className="text-[#D9A441]" />
            Career Highlights
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-[#1A1A1A]/75 dark:text-[#FAF7F0]/80 leading-8">
          Motivated and detail-oriented Business Administration graduate seeking an entry-level position in a dynamic organization or educational setting. Committed to continuous learning, professional growth, and delivering value through effective communication and teamwork.
        </p>
      </motion.section>

      {/* Navigation cards */}
      <section className="grid gap-4 md:grid-cols-2">
        {quickLinks.map((item, index) => (
          <motion.div
            key={item.href}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
          >
            <Link
              href={item.href}
              className="group block rounded-3xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-white/55 dark:bg-[#3E5B4C]/35 p-6 hover:border-[#D9A441] transition-colors"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[#1A1A1A]/70 dark:text-[#FAF7F0]/78">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#C06A3A] dark:text-[#F4B400]">
                Open page
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Professional highlights preview */}
      <section>
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Professional Highlights</h2>
          <Link href="/projects" className="text-sm text-[#C06A3A] dark:text-[#F4B400] hover:underline">
            View all highlights
          </Link>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {highlights.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="rounded-3xl border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0]/80 dark:bg-[#2F4A3F]/55 p-5"
            >
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[#1A1A1A]/70 dark:text-[#FAF7F0]/75">{item.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}