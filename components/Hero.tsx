"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroCanvas from "./HeroCanvas";

export default function Hero() {
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    const phrases = [
      "beschikbaar voor werk",
      "altijd aan het bouwen",
      "open voor freelance",
      "tilburg, nl",
      "full-stack developer",
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    function type() {
      const current = phrases[phraseIndex];

      if (!isDeleting) {
        setTypedText(current.slice(0, charIndex + 1));
        charIndex++;
        if (charIndex === current.length) {
          timeoutId = setTimeout(() => {
            isDeleting = true;
            type();
          }, 2000);
          return;
        }
      } else {
        setTypedText(current.slice(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
        }
      }

      timeoutId = setTimeout(type, isDeleting ? 40 : 80);
    }

    const startTimeout = setTimeout(type, 1200);

    return () => {
      clearTimeout(startTimeout);
      clearTimeout(timeoutId);
    };
  }, []);

  const nameWords = ["FARHAN", "FARAH"];

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number]
      }
    })
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden border-b border-[var(--border)] bg-glow-radial">
      {/* Background Three.js Canvas */}
      <HeroCanvas />

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col justify-between h-[80vh] pt-24">
        
        {/* Main Content Area */}
        <div className="flex-1 grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Text Content */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-fit border border-[var(--accent-dim)] bg-black/40 px-4 py-1.5 rounded-full font-mono text-[10px] text-[var(--accent)] mb-8 tracking-widest flex items-center gap-2 shadow-[0_0_15px_rgba(0,245,212,0.1)] backdrop-blur-md"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              STATUS: ACTIEF / OPEN VOOR WERK
            </motion.div>
            
            {/* Main Title Name */}
            <h1 className="font-display text-[56px] md:text-[88px] lg:text-[104px] font-extrabold uppercase leading-[0.9] tracking-tight mb-8 flex flex-col drop-shadow-2xl">
              {nameWords.map((word, idx) => (
                <motion.span
                  key={idx}
                  custom={idx}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className={idx === 0 ? "text-[var(--text-primary)]" : "text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-[var(--accent)]"}
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Subtitle */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
              }}
              className="space-y-4 mb-12 max-w-xl"
            >
              <motion.p variants={fadeUpVariants} className="font-sans text-lg md:text-xl text-[#E5E7EB] tracking-wide font-medium leading-relaxed">
                Full-Stack Developer & Cybersecurity Student
              </motion.p>
              <motion.p variants={fadeUpVariants} className="font-sans text-sm md:text-base text-[var(--text-secondary)] opacity-80 leading-relaxed">
                Ik ontwerp en bouw performante webapplicaties met een focus op veiligheid, schaalbaarheid en premium user experiences. Vanuit Tilburg.
              </motion.p>
            </motion.div>

            {/* Call To Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-wrap gap-6"
            >
              <Link
                href="#projects"
                className="bg-[var(--accent)] text-black font-mono px-8 py-4 text-xs font-bold transition-all hover:bg-[#00d1b5] hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] hover:-translate-y-1 tracking-widest rounded flex items-center gap-2"
              >
                BEKIJK PROJECTEN
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>
              <Link
                href="#contact"
                className="bg-[#111] border border-[#333] text-[var(--text-primary)] font-mono px-8 py-4 text-xs font-bold hover:bg-[#1a1a1a] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all tracking-widest rounded flex items-center gap-2"
              >
                CONTACT
              </Link>
            </motion.div>

          </div>

          {/* Right: Hero Right Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="flex lg:col-span-5 justify-center lg:justify-end w-full"
          >
            <div className="hero-right">

              {/* OPTIE F: Roterende cirkel */}
              <div className="rotating-badge">
                <svg viewBox="0 0 200 200" className="rotating-ring">
                  <defs>
                    <path id="circlePath"
                      d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                    />
                  </defs>
                  <text className="circle-text">
                    <textPath href="#circlePath" startOffset="0%">
                      WEB DEVELOPER · SOFTWARE DEVELOPER · CYBERSECURITY · FREELANCER · TILBURG ·&nbsp;
                    </textPath>
                  </text>
                </svg>
                {/* Centraal icoon of initialen in de cirkel */}
                <div className="badge-center">
                  <span className="badge-initials">FF</span>
                  <div className="badge-dot"></div>
                </div>
              </div>

              {/* OPTIE H: Terminal typewriter */}
              <div className="terminal-line">
                <span className="terminal-prompt">~&nbsp;</span>
                <span className="typewriter" id="typewriter">{typedText}</span>
                <span className="cursor">▋</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Social Links Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="flex justify-between items-center border-t border-[var(--border)] pt-6 mt-auto select-none"
        >
          <div className="font-mono text-[11px] text-[var(--text-secondary)]">
            YONDER & AVANS HOGESCHOOL // 2026
          </div>
          <div className="flex gap-6 font-mono text-[11px]">
            <a 
              href="https://github.com/Wavezy11" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              GITHUB
            </a>
            <a 
              href="https://linkedin.com/in/farhanfarah/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
            >
              LINKEDIN
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
