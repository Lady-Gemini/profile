import "./globals.css";

export const metadata = {
  title: "Rida Shahid | Portfolio",
  description: "Business Administration Graduate Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}