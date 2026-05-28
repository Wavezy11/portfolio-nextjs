import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg)",
        foreground: "var(--text-primary)",
        terminal: {
          green: "var(--accent)",
          "green-dim": "var(--accent-dim)",
          red: "var(--red)",
          yellow: "var(--yellow)",
        },
      },
      borderColor: {
        faint: "var(--border-faint)",
        green: "var(--border-green)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-ibm-plex-mono)", "monospace"],
        mono: ["var(--font-ibm-plex-mono)", "monospace"],
        display: ["var(--font-syne)", "sans-serif"],
      },
      animation: {
        pulseFast: "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        }
      },
    },
  },
  plugins: [],
};
export default config;
