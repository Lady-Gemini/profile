"use client";

import { ReactNode, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function InfoAccordion({
  title,
  subtitle,
  children,
  defaultOpen = false,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section className="rounded-3xl border border-[#1A1A1A]/10 bg-white/55 dark:bg-[#3E5B4C]/35 dark:border-[#FAF7F0]/10 backdrop-blur-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-5 py-5 md:px-7 md:py-6 flex items-center justify-between gap-4 text-left"
      >
        <div>
          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-1 text-sm text-[#1A1A1A]/60 dark:text-[#FAF7F0]/70">{subtitle}</p>
          ) : null}
        </div>
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.25 }}>
          <ChevronDown className="text-[#D9A441]" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 px-5 pb-6 pt-5 md:px-7">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
