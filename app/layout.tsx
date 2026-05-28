import type { Metadata } from "next";
import { Syne, IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const syne = Syne({ 
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

const ibmPlexMono = IBM_Plex_Mono({ 
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Farhan Farah | Web & Software Developer · Cybersecurity Student",
  description: "Portfolio van Farhan Farah: 20-jarige full-stack developer & cybersecurity student uit Tilburg. Bekijk mijn projecten en neem contact op.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        suppressHydrationWarning
        className={`${syne.variable} ${ibmPlexMono.variable} ${inter.variable} font-sans antialiased bg-[#050505] text-[#e0e0e0]`}
      >
        <div className="scanlines" />
        <svg className="noise-overlay" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
        <Cursor />
        <Nav />
        <main className="relative z-10 flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
