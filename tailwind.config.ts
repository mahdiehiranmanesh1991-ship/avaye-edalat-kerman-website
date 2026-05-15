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
        charcoal: "#171814",
        "charcoal-soft": "#24251f",
        ivory: "#f7f0e3",
        "ivory-muted": "#efe4d2",
        gold: "#b8924a",
        "gold-soft": "#d3b16f",
        olive: "#3f4630",
        "olive-deep": "#2e3524",
        "ink-muted": "#6f6a5f",
      },
      fontFamily: {
        sans: ["Vazirmatn", "IRANSans", "Tahoma", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
