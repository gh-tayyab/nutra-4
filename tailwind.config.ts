import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core brand tokens — derived from the Nutra-4 box (black + gold) but
        // set against a warm, light neutral for a premium, airy feel.
        ink: "#15130F",       // near-black, warmer than pure #000
        paper: "#FAF8F3",     // warm off-white background
        paper2: "#F3EFE5",    // slightly deeper neutral for section banding
        gold: "#A9781E",      // deep, muted gold — accent
        "gold-deep": "#7C591A", // darker gold for hover/pressed states
        "gold-light": "#E8D9AF", // pale gold for subtle fills/badges
        stone: "#6B6559",     // muted body text on paper
        line: "#E6E1D6",      // hairline borders
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(21,19,15,0.04), 0 12px 32px -16px rgba(21,19,15,0.18)",
        gold: "0 8px 24px -8px rgba(169,120,30,0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        fadeUp: "fadeUp 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
