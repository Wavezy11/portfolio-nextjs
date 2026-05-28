"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Settings, Shield } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: Monitor,
    skills: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS", "Figma", "Rust"]
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Node.js", "PHP", "Python", "Java", "REST APIs", "PostgreSQL", "MySQL", "Docker"]
  },
  {
    title: "Tools & Workflow",
    icon: Settings,
    skills: ["Git", "GitHub", "Linux", "VS Code", "Vercel", "Netlify", "Scrum/Agile"]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    skills: ["Netwerk fundamentals", "Ethical hacking basics", "CTF challenges", "Linux security", "OWASP awareness"]
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
} as const;

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-b border-[var(--border)] relative bg-glow-radial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] mb-16 text-lg"
        >
          [ 02 ] <span className="text-[var(--text-primary)] ml-2">SKILLS</span>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-t-cyan-500/50 hover:-translate-y-2 transition-all duration-500 shadow-xl rounded-2xl"
              >
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-3 rounded-lg border border-[var(--border)] bg-black/30 text-[var(--accent)] group-hover:border-[var(--accent)] group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300 shadow-[0_0_15px_rgba(0,245,212,0.1)] group-hover:shadow-[0_0_20px_rgba(0,245,212,0.3)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl text-[var(--text-primary)] font-bold tracking-tight">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono text-xs text-[var(--text-primary)] opacity-80 border border-[var(--border)] bg-black/40 px-3.5 py-1.5 rounded-full hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-300 select-none"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
