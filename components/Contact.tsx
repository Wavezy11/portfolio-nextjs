"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("submitting");
    setErrorMessage("");

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY";

    if (accessKey === "YOUR_ACCESS_KEY" || accessKey === "" || accessKey.toLowerCase().includes("dummy")) {
      // Graceful fallback for local development if key is not set yet or is dummy
      console.warn("Web3Forms access key is not set or is dummy. Falling back to mockup success state.");
      setTimeout(() => {
        setStatus("success");
        formRef.current?.reset();
      }, 1000);
      return;
    }

    const formData = new FormData(formRef.current);
    formData.append("access_key", accessKey);
    formData.append("subject", "Nieuw bericht via portfolio");
    formData.append("from_name", "Farhan Farah Portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        console.log("Email successfully sent via Web3Forms:", data.message);
        setStatus("success");
        formRef.current.reset();
      } else {
        console.error("Web3Forms submission error:", data.message);
        setErrorMessage("Het verzenden is mislukt. Probeer het later opnieuw of stuur een directe mail.");
        setStatus("error");
      }
    } catch (error) {
      console.error("Web3Forms network error:", error);
      setErrorMessage("Netwerkfout. Controleer je internetverbinding en probeer het opnieuw.");
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 border-b border-[var(--border)] relative bg-glow-radial">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-mono text-[var(--accent)] mb-16 text-lg"
        >
          [ 05 ] <span className="text-[var(--text-primary)] ml-2">CONTACT</span>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 max-w-5xl mx-auto items-start">
          
          {/* LEFT COLUMN: Personal text & info */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="font-display text-3xl md:text-4xl text-[var(--text-primary)] font-bold tracking-tight leading-snug">
                Bouw jij iets en heb je <br />
                een developer nodig?
              </h2>
              
              <p className="font-mono text-sm text-[var(--text-secondary)] leading-relaxed">
                Of gewoon zin om te connecten — <br />
                stuur een bericht, ik reageer snel.
              </p>
            </motion.div>

            {/* Direct Contact Links */}
            <div className="space-y-4 pt-8 border-t border-[var(--border)] max-w-sm select-all">
              <div className="flex items-center gap-4 py-2">
                <span className="font-mono text-sm text-[var(--accent)] w-8 select-none">✉</span>
                <a href="mailto:mohammed5049@protonmail.com" className="font-mono text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  mohammed5049@protonmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 py-2">
                <span className="font-mono text-sm text-[var(--accent)] w-8 select-none">⌥</span>
                <a href="https://github.com/Wavezy11" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  github.com/Wavezy11
                </a>
              </div>

              <div className="flex items-center gap-4 py-2">
                <span className="font-mono text-sm text-[var(--accent)] w-8 select-none">in</span>
                <a href="https://linkedin.com/in/farhanfarah" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                  linkedin.com/in/farhanfarah
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-6 glass-card p-8 md:p-10 shadow-2xl relative rounded-xl">
            <h3 className="font-display text-xl text-[var(--text-primary)] font-bold mb-6 tracking-tight">STUUR EEN BERICHT</h3>
            
            <form ref={formRef} className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative group">
                <input 
                  type="text" 
                  name="user_name"
                  id="user_name"
                  required
                  className="peer w-full bg-[#1A1A1A] border border-[#333] px-4 py-3 font-mono text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all rounded-lg placeholder-transparent shadow-inner"
                  placeholder="Naam"
                />
                <label 
                  htmlFor="user_name" 
                  className="absolute left-4 top-3.5 font-mono text-[10px] text-[var(--text-secondary)] transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-[#151515] peer-focus:px-2.5 peer-focus:text-[var(--accent)] peer-valid:-top-2.5 peer-valid:left-2 peer-valid:bg-[#151515] peer-valid:peer-focus:bg-[#151515] peer-valid:px-2.5 peer-valid:text-[10px] rounded"
                >
                  NAAM
                </label>
              </div>

              <div className="relative group">
                <input 
                  type="email" 
                  name="user_email"
                  id="user_email"
                  required
                  className="peer w-full bg-[#1A1A1A] border border-[#333] px-4 py-3 font-mono text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all rounded-lg placeholder-transparent shadow-inner"
                  placeholder="Email"
                />
                <label 
                  htmlFor="user_email" 
                  className="absolute left-4 top-3.5 font-mono text-[10px] text-[var(--text-secondary)] transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-[#151515] peer-focus:px-2.5 peer-focus:text-[var(--accent)] peer-valid:-top-2.5 peer-valid:left-2 peer-valid:bg-[#151515] peer-valid:peer-focus:bg-[#151515] peer-valid:px-2.5 peer-valid:text-[10px] rounded"
                >
                  EMAIL
                </label>
              </div>

              <div className="relative group">
                <textarea 
                  name="message"
                  id="message"
                  required
                  rows={4}
                  className="peer w-full bg-[#1A1A1A] border border-[#333] px-4 py-3 font-mono text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent)] transition-all rounded-lg resize-none placeholder-transparent shadow-inner"
                  placeholder="Bericht"
                ></textarea>
                <label 
                  htmlFor="message" 
                  className="absolute left-4 top-3.5 font-mono text-[10px] text-[var(--text-secondary)] transition-all duration-300 peer-focus:-top-2.5 peer-focus:left-2 peer-focus:bg-[#151515] peer-focus:px-2.5 peer-focus:text-[var(--accent)] peer-valid:-top-2.5 peer-valid:left-2 peer-valid:bg-[#151515] peer-valid:peer-focus:bg-[#151515] peer-valid:px-2.5 peer-valid:text-[10px] rounded"
                >
                  BERICHT
                </label>
              </div>

              {/* Status Message */}
              {status === "error" && (
                <div className="font-mono text-xs text-[var(--red)] bg-[var(--red)]/10 border border-[var(--red)]/35 p-3">
                  {errorMessage}
                </div>
              )}

              <button 
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={`w-full font-mono px-6 py-4 text-xs font-bold uppercase transition-all duration-300 tracking-wider flex items-center justify-center gap-2 rounded-lg ${
                  status === "success" 
                    ? "bg-[var(--accent-dim)] text-[var(--accent)] border border-[var(--accent)] cursor-not-allowed" 
                    : "bg-[var(--accent)] text-black hover:bg-[#00d1b5] hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] hover:-translate-y-1"
                }`}
              >
                {status === "idle" && (
                  <>VERSTUUR BERICHT</>
                )}
                {status === "submitting" && "VERSTUREN..."}
                {status === "success" && "BERICHT VERZONDEN ✓"}
                {status === "error" && "PROBEER OPNIEUW"}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
