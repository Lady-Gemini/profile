"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { navLinks } from "@/lib/site-data";

export function SiteNav() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#FAF7F0]/75 dark:bg-[#2F4A3F]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="font-semibold tracking-tight text-lg">
          Rida Shahid
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                  active
                    ? "bg-[#1A1A1A] text-[#FAF7F0] dark:bg-[#F2E9DC] dark:text-[#1A1A1A]"
                    : "text-[#1A1A1A]/70 dark:text-[#FAF7F0]/80 hover:bg-[#F2E9DC] dark:hover:bg-[#3E5B4C]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/Rida_CV.pdf"
            download
            className="hidden md:inline-flex rounded-full bg-[#D9A441] hover:bg-[#C06A3A] px-4 py-2 text-sm font-bold text-[#1A1A1A] transition-all shadow-md hover:shadow-[0_0_15px_#F4B400]"
          >
            Resume
          </a>
          <button
            type="button"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 hover:border-[#D9A441]"
            aria-label="Toggle theme"
          >
            {mounted ? (theme === "dark" ? <Sun size={18} /> : <Moon size={18} />) : <div className="w-[18px] h-[18px]" />}
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-t border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10"
          >
            <div className="px-4 py-3 flex flex-col gap-2">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium ${
                      active
                        ? "bg-[#1A1A1A] text-[#FAF7F0] dark:bg-[#F2E9DC] dark:text-[#1A1A1A]"
                        : "bg-[#F2E9DC]/65 dark:bg-[#3E5B4C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="/Rida_CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-bold bg-[#D9A441] text-[#1A1A1A] mt-2 text-center shadow-md"
              >
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
