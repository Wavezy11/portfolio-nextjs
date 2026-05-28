"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const INITIAL_LINES = [
  { text: "$ whoami", delay: 800 },
  { text: "→ farhan farah — web & software developer", delay: 1400 },
  { text: "$ cat about.txt", delay: 2400 },
  { text: "→ 19 y/o · tilburg, nl · fontys hogeschool software development", delay: 2800 },
  { text: "→ active builder & cybersecurity student", delay: 3000 },
  { text: "$ ls projects/", delay: 4200 },
  { text: "→ liv-zorg/  carwash/  barakah-boost/  loven/  flawless/  fashionlabs/", delay: 4600 },
  { text: "$ status", delay: 5600 },
  { text: "→ [ ALWAYS BUILDING ] — open for opportunities", delay: 6000 },
];

export default function Terminal() {
  const [lines, setLines] = useState<{ id: string; text: string; isInput?: boolean }[]>([]);
  const [isInteractive, setIsInteractive] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-typing sequence
  useEffect(() => {
    const timeoutIds: NodeJS.Timeout[] = [];
    
    INITIAL_LINES.forEach((line) => {
      const id = setTimeout(() => {
        setLines((prev) => [...prev, { id: Math.random().toString(), text: line.text }]);
        // Scroll to bottom
        if (scrollRef.current) {
          scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
      }, line.delay);
      timeoutIds.push(id);
    });

    const finishId = setTimeout(() => {
      setIsInteractive(true);
      setTimeout(() => inputRef.current?.focus(), 100);
    }, 6500);
    timeoutIds.push(finishId);

    return () => timeoutIds.forEach(clearTimeout);
  }, []);

  // Auto-scroll on lines change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const cmd = inputValue.trim().toLowerCase();
    let output = "";

    switch (cmd) {
      case "whoami":
        output = "farhan farah — web & software developer";
        break;
      case "help":
        output = "commands: whoami, skills, projects, contact, cv, clear, stage, languages";
        break;
      case "skills":
        output = "Frontend:  HTML, CSS, JavaScript, React, Vue, Tailwind\nBackend:   Node.js, PHP, Python, Java\nTools:     Git, GitHub, Figma, Linux\nSecurity:  Cybersecurity, Ethical Hacking, Netwerken";
        break;
      case "projects":
        output = "livzorg, vanhogendorpautos, barakahboost, lovenofficial, rijschoolflawless, fashionlabs, zip-kompas, woonwinkel, bioscoop, pacman";
        break;
      case "contact":
        output = "email: Mohammed5049@protonmail.com | github: Wavezy11 | linkedin: farhanfarah";
        break;
      case "cv":
        output = "downloading cv_farhan.pdf...";
        // Trigger download
        const link = document.createElement("a");
        link.href = "/cv_farhan.pdf";
        link.download = "cv_farhan.pdf";
        link.click();
        break;
      case "clear":
        setLines([]);
        setInputValue("");
        return;
      case "stage":
        output = "1Optic — Software Developer Intern (Sep 2024 – Feb 2025)\nPractoraat Interactieve Technologieën — Software Development Student (Feb 2024 – Jul 2024)";
        break;
      case "languages":
        output = "nederlands (native) · english (fluent) · somali (fluent)";
        break;
      default:
        output = `command not found: ${cmd} — type 'help' for available commands`;
    }

    const newLines = [
      ...lines,
      { id: Math.random().toString(), text: `$ ${inputValue}`, isInput: true },
      ...output.split('\n').map(l => ({ id: Math.random().toString(), text: `→ ${l}` }))
    ];

    // Keep last 20 lines
    setLines(newLines.slice(-20));
    setInputValue("");
  };

  return (
    <div className="w-full max-w-lg mx-auto md:ml-auto border border-[var(--border-faint)] bg-[rgba(0,255,65,0.02)] backdrop-blur-sm relative rounded-t-md overflow-hidden flex flex-col h-[420px] shadow-2xl">
      {/* Chrome Header */}
      <div className="h-8 border-b border-[var(--border-faint)] flex items-center px-4 gap-2 bg-[rgba(255,255,255,0.02)] shrink-0">
        <div className="w-3 h-3 rounded-full bg-[var(--red)] opacity-80" />
        <div className="w-3 h-3 rounded-full bg-[var(--yellow)] opacity-80" />
        <div className="w-3 h-3 rounded-full bg-[var(--green)] opacity-80" />
        <div className="ml-auto font-mono text-[10px] text-[var(--off-white)] opacity-40">guest@farhan.dev:~</div>
      </div>
      
      {/* Body */}
      <div 
        ref={scrollRef}
        className="p-6 flex-1 overflow-y-auto text-[var(--off-white)] opacity-80 font-mono text-sm space-y-2 scroll-smooth"
        onClick={() => isInteractive && inputRef.current?.focus()}
      >
        {lines.map((line) => (
          <motion.div
            key={line.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={`whitespace-pre-wrap ${line.text.startsWith('$') ? 'text-[var(--green)]' : 'text-[var(--off-white)] opacity-70'}`}
          >
            {line.text}
          </motion.div>
        ))}
        
        {/* Interactive Prompt */}
        {isInteractive && (
          <form onSubmit={handleCommand} className="flex items-center mt-2">
            <span className="text-[var(--green)] mr-2">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[var(--green)] font-mono text-sm caret-[var(--green)]"
              autoFocus
              aria-label="Terminal Input"
            />
          </form>
        )}
      </div>
    </div>
  );
}
