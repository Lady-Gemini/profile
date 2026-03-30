import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#F2E9DC]/45 dark:bg-[#3E5B4C]/35">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-[#1A1A1A]/70 dark:text-[#FAF7F0]/75">
          Professional portfolio profile for career opportunities.
        </p>
        <div className="flex items-center gap-4 text-sm">
          <Link href="mailto:ridasa786@gmail.com" className="hover:text-[#C06A3A]">
            ridasa786@gmail.com
          </Link>
          <span className="text-[#D9A441]">•</span>
          <Link href="tel:+923137946587" className="hover:text-[#C06A3A]">
            +92 313 7946587
          </Link>
        </div>
      </div>
    </footer>
  );
}
