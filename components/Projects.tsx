"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code } from "lucide-react";
import { projects, Project } from "@/data/projects";

const BrowserIframeMockup = ({ project }: { project: Project }) => {
  return (
    <div className="w-full border border-[var(--border)] bg-[#050505] rounded-xl overflow-hidden flex flex-col shadow-2xl transition-all duration-500 hover:border-[var(--accent)] hover:shadow-[0_0_30px_rgba(0,245,212,0.15)] hover:-translate-y-2 group/browser">
      {/* Browser Chrome Header */}
      <div className="h-9 browser-chrome flex items-center px-4 gap-2.5 shrink-0 select-none bg-white/5 border-b border-white/10 relative z-20">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
        </div>
        <div className="mx-auto max-w-[280px] w-full bg-black/40 border border-white/5 rounded px-3 py-1 font-mono text-[10px] text-[var(--text-secondary)] opacity-60 truncate text-center">
          {project.preview || "local.development"}
        </div>
        <div className="w-12 text-right">
          {project.preview && (
            <span className="font-mono text-[8px] bg-[var(--accent-dim)] text-[var(--accent)] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">
              LIVE
            </span>
          )}
        </div>
      </div>

      {/* Screen Body */}
      <div className="relative w-full overflow-hidden bg-[#0e0e11]" style={{ paddingBottom: "62.5%" }}>
        {project.preview ? (
          <iframe
            src={project.preview}
            className="absolute top-0 left-0 border-none pointer-events-none"
            style={{ 
              width: "166.66%", 
              height: "166.66%", 
              transform: "scale(0.6)",
              transformOrigin: "top left"
            }}
            loading="lazy"
            title={`${project.title} live preview`}
            sandbox="allow-scripts allow-same-origin"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950 p-6">
            <span className="font-mono text-xs text-[var(--text-secondary)]">[ GEEN LIVE PREVIEW ]</span>
          </div>
        )}
      </div>
    </div>
  );
};

const FeaturedProject = ({ project, index }: { project: Project; index: number }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center py-16 border-b border-[var(--border)] last:border-0">
      
      {/* Mockup Column (takes 7 columns) */}
      <div className={`lg:col-span-7 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <BrowserIframeMockup project={project} />
        </motion.div>
      </div>

      {/* Info Column (takes 5 columns) */}
      <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"} flex flex-col justify-center`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="space-y-5"
        >
          <div className="font-mono text-xs text-[var(--text-secondary)] flex items-center gap-2">
            <span>{"// FEATURED PROJECT • " + project.num}</span>
          </div>

          <h3 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] font-bold tracking-tight leading-none">
            {project.title}
          </h3>

          <p className="font-sans font-light text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.tags.map((tag, i) => (
              <span key={i} className="font-mono text-[11px] text-cyan-300 border border-cyan-500/30 px-3 py-1 bg-cyan-500/20 rounded-full shadow-sm">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-5 border-t border-[var(--border)] w-full">
            {project.preview && (
              <a 
                href={project.preview} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-[11px] text-[var(--accent)] border border-[var(--accent)] px-4 py-2 hover:bg-[var(--accent)] hover:text-black flex items-center gap-1.5 transition-all font-bold uppercase tracking-wider rounded"
              >
                Live Preview ↗
              </a>
            )}
            
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-mono text-[11px] text-[var(--text-primary)] border border-white/20 bg-white/5 px-4 py-2 hover:bg-white/10 flex items-center gap-1.5 transition-all font-bold uppercase tracking-wider rounded"
              >
                GitHub ↗
              </a>
            )}
          </div>
        </motion.div>
      </div>

    </div>
  );
};

const GridProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-card p-8 flex flex-col justify-between hover:border-t-cyan-500/50 hover:shadow-[0_0_25px_rgba(0,245,212,0.15)] hover:-translate-y-2 transition-all duration-500 relative group min-h-[240px] rounded-xl"
    >
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          {project.category && (
            <span className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
              {project.category}
            </span>
          )}
          <span className="font-mono text-[10px] text-[var(--accent)]">
            [{project.num}]
          </span>
        </div>

        <h4 className="font-display text-2xl text-[var(--text-primary)] font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h4>

        <p className="font-sans font-light text-[var(--text-secondary)] text-sm leading-relaxed">
          {project.desc}
        </p>
      </div>

      <div className="mt-8 space-y-4">
        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag, j) => (
            <span key={j} className="font-mono text-[10px] text-cyan-300 border border-cyan-500/20 px-2 py-0.5 bg-cyan-500/10 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
          {project.preview && (
            <a href={project.preview} target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] text-[var(--accent)] border border-[var(--accent)] px-3 py-1.5 hover:bg-[var(--accent)] hover:text-black transition-all font-bold uppercase tracking-wider flex items-center gap-1 rounded">
              Live Preview <ArrowUpRight size={10} />
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="font-mono text-[9px] text-[var(--text-primary)] border border-white/20 bg-white/5 px-3 py-1.5 hover:bg-white/10 transition-all font-bold uppercase tracking-wider flex items-center gap-1 rounded">
              GitHub <Code size={10} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const featured = projects.slice(0, 4);
  const others = projects.slice(4);

  return (
    <section id="projects" className="py-24 border-b border-[var(--border)] relative bg-glow-radial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] mb-12 text-lg"
        >
          [ 04 ] <span className="text-[var(--text-primary)] ml-2">PROJECTS</span>
        </motion.div>

        {/* FEATURED PROJECTS */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {featured.map((project, idx) => (
            <FeaturedProject key={project.num} project={project} index={idx} />
          ))}
        </div>

        {/* OTHER PROJECTS HEADER */}
        <div className="max-w-6xl mx-auto mt-24 mb-12">
          <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4">
            <span className="font-mono text-sm text-[var(--accent)]">{"// ARCHIVE"}</span>
            <h3 className="font-display text-2xl text-[var(--text-primary)] font-bold tracking-tight">OVERIGE PROJECTEN</h3>
          </div>
        </div>

        {/* OTHER PROJECTS GRID */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {others.map((project) => (
            <GridProjectCard key={project.num} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
