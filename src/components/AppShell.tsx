"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";

export function AppShell({ children }: { children: ReactNode }) {
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.15 });
  const yOne = useTransform(scrollY, [0, 1200], [0, -80]);
  const yTwo = useTransform(scrollY, [0, 1200], [0, 80]);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-grid">
      {/* Global scroll progress indicator */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-1 w-full origin-left bg-[#F4B400]"
        style={{ scaleX: progress }}
      />

      {/* Soft parallax atmosphere */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <motion.div
          style={{ y: yOne }}
          className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-[#E3A72F]/25 dark:bg-[#D9A441]/20 blur-3xl"
        />
        <motion.div
          style={{ y: yTwo }}
          className="absolute -bottom-24 -right-16 h-96 w-96 rounded-full bg-[#E97A5A]/20 dark:bg-[#3E5B4C]/45 blur-3xl"
        />
      </div>

      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-4 sm:px-6 py-8 md:py-10">{children}</main>
      <SiteFooter />
    </div>
  );
}
