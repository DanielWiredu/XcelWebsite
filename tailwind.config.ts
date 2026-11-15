import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Xcel iSolutions brand palette (from the twin-diamond logo: navy + gold)
        navy: {
          50: "#eef1fb",
          100: "#dbe1f6",
          200: "#b7c2ed",
          300: "#8f9fe0",
          400: "#6577cf",
          500: "#4453b8",
          600: "#333f97",
          700: "#28316f",
          800: "#1c2450",
          900: "#141a3c",
          950: "#0b0f26",
        },
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
        },
        gold: {
          50: "#fefaec",
          100: "#fcf0c8",
          200: "#f9e08c",
          300: "#f6cb50",
          400: "#f4b728",
          500: "#ed9a10",
          600: "#d1750b",
          700: "#ae530d",
          800: "#8d4112",
          900: "#743612",
        },
        // Warm editorial surfaces + neutral reading inks
        paper: {
          DEFAULT: "#f7f5ef",
          deep: "#efebe1",
        },
        ink: {
          DEFAULT: "#141a3c",
          soft: "#3d4366",
          muted: "#5d6380",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        // Fluid display sizes for editorial headlines
        "display-xl": ["clamp(2.9rem, 7.2vw, 6.25rem)", { lineHeight: "0.98", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.4rem, 5.2vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem, 3.8vw, 3.25rem)", { lineHeight: "1.06", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(11, 15, 38, 0.12)",
        card: "0 24px 64px -24px rgba(11, 15, 38, 0.28)",
        float: "0 30px 80px -20px rgba(0, 0, 0, 0.45)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float-y": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
        // CSS-driven first-paint animations: run before JS hydrates
        "word-in": {
          from: { transform: "translateY(105%)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-up": {
          from: { transform: "translateY(18px)", opacity: "0" },
          to: { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "zoom-out": {
          from: { transform: "scale(1.12)" },
          to: { transform: "scale(1)" },
        },
      },
      animation: {
        "word-in": "word-in 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-up": "fade-up 1s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in": "fade-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        "zoom-out": "zoom-out 2.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        marquee: "marquee 40s linear infinite",
        "float-y": "float-y 7s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
