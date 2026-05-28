"use client";

import { motion } from "framer-motion";
import { internships, sideJobs, ExperienceItem } from "@/data/experience";

const TimelineCard = ({ item }: { item: ExperienceItem }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0 group">
      {/* Node Dot on Timeline */}
      <div className="absolute left-[-4.5px] top-1.5 w-[10px] h-[10px] bg-[var(--bg)] border-2 border-[var(--border)] rounded-full group-hover:border-[var(--accent)] group-hover:bg-[var(--accent)] transition-all duration-300 z-10 group-hover:shadow-[0_0_15px_var(--accent)]" />
      
      {/* Date */}
      <div className="font-mono text-xs text-[var(--accent)] mb-2 tracking-wide">
        {item.date}
      </div>
      
      {/* Role & Company */}
      <h4 className="font-display text-xl md:text-2xl text-[var(--text-primary)] font-bold tracking-tight mb-1">
        {item.role}
      </h4>
      <div className="font-mono text-xs text-[var(--text-secondary)] mb-4">
        → <span className="text-[var(--text-primary)] font-semibold">{item.company}</span>
      </div>

      {/* Badges */}
      {item.badges && (
        <div className="flex flex-wrap gap-2 mb-4">
          {item.badges.map((badge, b) => (
            <span key={b} className="font-mono text-[11px] text-[var(--accent)] border border-[var(--accent)] px-3 py-1 bg-[var(--accent-dim)] rounded-full font-bold shadow-sm">
              {badge}
            </span>
          ))}
        </div>
      )}

      {/* Bullets */}
      <ul className="space-y-2">
        {item.tasks.map((task, j) => (
          <li key={j} className="text-sm font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors flex items-start leading-relaxed">
            <span className="text-[var(--accent)] mr-2.5 mt-1.5 text-[8px]">▪</span>
            <span>{task}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-b border-[var(--border)] relative bg-glow-radial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] mb-16 text-lg"
        >
          [ 03 ] <span className="text-[var(--text-primary)] ml-2">EXPERIENCE</span>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          
          {/* STAGES */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4 mb-4 select-none">
              <span className="font-mono text-xs text-[var(--accent)]">{"// STUDIE"}</span>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />
              {internships.map((item, i) => (
                <TimelineCard key={`intern-${i}`} item={item} />
              ))}
            </div>
          </div>

          {/* WERKERVARING */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 border-b border-[var(--border)] pb-4 mb-4 select-none">
              <span className="font-mono text-xs text-[var(--accent)]">{"// WERKERVARING"}</span>
            </div>
            
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-cyan-500/50 via-white/10 to-transparent" />
              {sideJobs.map((item, i) => (
                <TimelineCard key={`work-${i}`} item={item} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
