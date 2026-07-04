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
        // Xcel iSolutions brand palette (derived from the diamond logo: navy + gold)
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
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(20, 26, 60, 0.12)",
        card: "0 20px 60px -20px rgba(20, 26, 60, 0.18)",
        glow: "0 0 60px -10px rgba(37, 99, 235, 0.35)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "float-slow": "float-slow 8s ease-in-out infinite",
        "gradient-pan": "gradient-pan 12s ease infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
