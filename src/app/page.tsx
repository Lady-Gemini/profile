"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Sparkles } from "lucide-react";
import { Hero } from "@/components/Hero";

const quickLinks = [
  {
    title: "About",
    text: "Learn about my approach, values, and academic background.",
    href: "/about",
  },
  {
    title: "Experience",
    text: "Review my practical work history and responsibilities.",
    href: "/experience",
  },
  {
    title: "Skills",
    text: "Explore my technical, professional, and operational strengths.",
    href: "/skills",
  },
  {
    title: "Contact",
    text: "Reach out to me for opportunities and collaborations.",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <div className="space-y-14">
      <Hero />

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
            Personal Profile
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-[#F2E9DC] dark:bg-[#2F4A3F] px-3 py-1 shadow-[0_0_15px_rgba(244,180,0,0.3)]">
            <Layers size={14} className="text-[#D9A441]" />
            My Journey
          </span>
        </div>
        <p className="mt-4 max-w-3xl text-[#1A1A1A]/80 dark:text-[#FAF7F0]/90 leading-8 text-lg font-medium">
          I'm a motivated and detail-oriented Business Administration graduate seeking an entry-level position in a dynamic organization or educational setting. I'm deeply committed to continuous learning, professional growth, and delivering massive value through effective communication and powerful teamwork.
        </p>
      </motion.section>

      {/* Navigation cards */}
      <section className="grid gap-4 md:grid-cols-2 pb-16">
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
              className="group block rounded-3xl border border-[#1A1A1A]/20 dark:border-[#FAF7F0]/20 bg-white/70 dark:bg-[#3E5B4C]/60 p-6 hover:border-[#D9A441] hover:shadow-[0_0_20px_rgba(217,164,65,0.2)] transition-all duration-300"
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm leading-7 text-[#1A1A1A]/80 dark:text-[#FAF7F0]/90">{item.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C06A3A] dark:text-[#F4B400] group-hover:text-[#F4B400] transition-colors">
                Explore section
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}