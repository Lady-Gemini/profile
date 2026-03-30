import "./globals.css";
import { Providers } from "./providers";
import { AppShell } from "@/components/AppShell";

export const metadata = {
  title: "Rida Shahid | Professional Portfolio",
  description: "Professional profile of Rida Shahid, including education, experience, skills, and contact information.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-[#FAF7F0] text-[#1A1A1A] dark:bg-[#2F4A3F] dark:text-[#FAF7F0] transition-colors duration-500 ease-in-out">
        <Providers>
          <AppShell>{children}</AppShell>
        </Providers>
      </body>
    </html>
  );
}