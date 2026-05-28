"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      // Simple active link detection based on section visibility
      const scrollPosition = window.scrollY + 100;
      for (const link of links) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={twMerge(
          clsx(
            "fixed top-0 left-0 w-full z-50 transition-all duration-300",
            scrolled ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-[var(--border)] py-4" : "bg-transparent py-6"
          )
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link href="/" className="font-display font-extrabold text-2xl tracking-tighter text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors select-none">
            farhan<span className="text-[var(--accent)]">.</span>dev
          </Link>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-mono text-xs uppercase tracking-[0.1em] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all relative py-1 flex flex-col group"
                >
                  {link.name}
                  {/* Indicator Line */}
                  <span className={clsx(
                    "absolute bottom-0 left-0 h-[2px] bg-[var(--accent)] transition-all duration-300",
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-[var(--text-primary)] hover:text-[var(--accent)] focus:outline-none transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col justify-center items-center gap-8 border-b border-[var(--accent-dim)]"
          >
            {links.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    "font-display text-4xl uppercase font-bold tracking-tight transition-colors py-2 relative",
                    isActive ? "text-[var(--accent)]" : "text-[var(--text-primary)] hover:text-[var(--accent)]"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
