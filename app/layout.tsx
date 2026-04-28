import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Sriram Siddartha — Software Engineer",
  description:
    "Portfolio of Sriram Siddartha Bandaru — Software Engineer specializing in Full Stack, AI/ML, and Space Technology.",
  keywords: ["Software Engineer", "AI/ML", "Space Tech", "React", "Next.js", "Python"],
  authors: [{ name: "Sriram Siddartha Bandaru" }],
  openGraph: {
    title: "Sriram Siddartha — Software Engineer",
    description: "Building intelligent systems for space, ML, and scalable software.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;400;600;700;800&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        {children}
        <footer className="py-8 px-6 border-t border-outline-variant/30 text-center">
          <p className="font-label text-xs text-on-surface-variant/40 tracking-widest uppercase">
            © {new Date().getFullYear()} Sriram Siddartha Bandaru · Built with Next.js & Firebase
          </p>
        </footer>
      </body>
    </html>
  );
}
