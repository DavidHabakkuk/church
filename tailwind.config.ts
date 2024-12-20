import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2a9d8f", // Example: A fresh green tone
        secondary: "#264653", // Example: A deep complementary tone
        accent: "#e76f51", // Example: A warm, vibrant accent color
      },
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%": { borderColor: "white" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          from: { opacity: "0", transform: "translateX(-100%)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        typing: "typing 3s steps(30, end), blink 0.75s step-end infinite",
        fadeIn: "fadeIn 1.5s ease forwards",
        fadeUp: "fadeUp 1.2s ease-out forwards",
        slideIn: "slideIn 1.5s ease-out forwards",
      },
      backgroundImage: {
        hero: "url('/path-to-your-hero-image.jpg')", // Replace with your image
        "section-pattern": "url('/path-to-your-pattern-image.png')",
      },
      screens: {
        xs: "480px", // Custom small screen size
      },
    },
  },
  plugins: [],
};

export default config;
