"use client";

import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "10+", label: "PROJECTEN AFGEROND" },
    { value: "5+", label: "BEDRIJVEN GEHOLPEN" },
    { value: "2", label: "STAGES VOLTOOID" },
    { value: "3+", label: "JAAR BOUWEN" },
  ];

  const info = [
    { key: "NAAM", value: "Farhan Farah" },
    { key: "LEEFTIJD", value: "20" },
    { key: "LOCATIE", value: "Tilburg, NL" },
    { key: "OPLEIDING", value: "Software Dev (MBO 4 @ Yonder) · Cybersecurity (HBO @ Avans)" },
    { key: "EMAIL", value: "Mohammed5049@protonmail.com" },
    { key: "GITHUB", value: "github.com/Wavezy11" },
    { key: "LINKEDIN", value: "linkedin.com/in/farhanfarah/" },
    { key: "STATUS", value: "Open voor stage & werk" },
  ];

  const tags = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Node.js",
    "Python",
    "PHP",
    "Tailwind",
    "Git",
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about" className="py-24 border-b border-[var(--border)] relative bg-glow-radial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] mb-16 text-lg"
        >
          [ 01 ] <span className="text-[var(--text-primary)] ml-2">ABOUT</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-6xl mx-auto items-start">
          {/* LEFT: Text + Stats */}
          <div className="lg:col-span-7 space-y-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 text-[#E5E7EB] leading-[1.7] text-base"
            >
              <motion.p variants={itemVariants} className="font-sans font-light opacity-100">
                Ik ben 20, woon in Tilburg en bouw dingen op het internet. Momenteel studeer ik Software Development (MBO 4) aan Yonder (t/m juli 2026), en vanaf september 2026 start ik met de deeltijd HBO-opleiding Cybersecurity aan Avans. In mijn vrije tijd ben ik bezig met projecten of CTF-challenges. Ik geloof dat goede software begint bij begrijpen wat mensen nodig hebben — niet alleen wat ze vragen.
              </motion.p>
              <motion.p variants={itemVariants} className="font-sans font-light opacity-100">
                Naast code ga ik regelmatig naar de gym, luister ik muziek tijdens late-night sessies en verdiep ik me in cybersecurity: hoe systemen worden aangevallen en hoe je ze verdedigt. Ik leer het liefst door te bouwen.
              </motion.p>
            </motion.div>

            {/* Stats Block */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card p-6 md:p-8 flex flex-col justify-center hover:-translate-y-2 transition-all duration-300 rounded-lg group"
                >
                  <div className="font-display text-3xl md:text-4xl text-[var(--text-primary)] mb-1 font-bold tracking-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="font-mono text-[10px] text-[var(--text-secondary)] uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Interest Tags */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {tags.map((tag, i) => (
                <span
                  key={i}
                  className="font-mono text-xs text-[var(--text-primary)] opacity-80 px-3 py-1.5 border border-[var(--border)] bg-[var(--card-bg)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300 select-none"
                >
                  {tag}
                </span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Structured info */}
          <div className="lg:col-span-5 w-full space-y-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-4"
            >
              {info.map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex flex-col sm:flex-row sm:items-baseline border-b border-[var(--border)] pb-4 group">
                  <div className="font-mono text-xs text-[var(--text-secondary)] w-32 shrink-0 group-hover:text-[var(--accent)] transition-colors duration-300">
                    {item.key}
                  </div>
                  <div className="font-mono text-sm text-[var(--text-primary)] mt-1 sm:mt-0 font-medium">
                    {item.value}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CV Download Removed */}
          </div>
        </div>
      </div>
    </section>
  );
}
