import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mit: {
          red: "#750014",
          silver: "#8b959e",
          blush: "#f9f2f4",
          charcoal: "#1f2933",
        },
      },
      boxShadow: {
        premium: "0 20px 45px -24px rgba(117, 0, 20, 0.32)",
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, rgba(139,149,158,0.22) 1px, transparent 1px)",
      },
    },
  },
};

export default config;
