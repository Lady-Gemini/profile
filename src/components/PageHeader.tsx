"use client";

import { motion } from "framer-motion";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mb-10 md:mb-12 pt-3">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-3 inline-flex rounded-full border border-[#D9A441]/45 bg-[#F2E9DC] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#C06A3A] dark:bg-[#3E5B4C] dark:text-[#F4B400]"
      >
        {eyebrow}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.05 }}
        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tighter leading-[1.05]"
      >
        {(() => {
          const words = title.split(" ");
          if (words.length <= 1) return title;
          const mid = Math.ceil(words.length / 2);
          const firstHalf = words.slice(0, mid).join(" ");
          const secondHalf = words.slice(mid).join(" ");
          return (
            <span className="flex flex-col">
              <span>{firstHalf}</span>
              <span className="text-[#C06A3A] dark:text-[#D9A441]">{secondHalf}</span>
            </span>
          );
        })()}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 26 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-4 max-w-2xl text-base md:text-lg text-[#1A1A1A]/70 dark:text-[#FAF7F0]/80"
      >
        {description}
      </motion.p>
    </section>
  );
}
