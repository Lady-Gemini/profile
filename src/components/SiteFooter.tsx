import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#1A1A1A]/10 dark:border-[#FAF7F0]/10 bg-[#F2E9DC]/45 dark:bg-[#3E5B4C]/35">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 flex flex-col md:flex-row items-center justify-center">
        <p className="text-sm text-[#1A1A1A]/70 dark:text-[#FAF7F0]/75">
          &copy; {new Date().getFullYear()} Rida Shahid. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
