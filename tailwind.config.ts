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
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
        blink: {
          '0%, 100%': { borderColor: 'transparent' },
          '50%': { borderColor: 'white' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
      },
      animation: {
        typing: 'typing 3s steps(30, end), blink 0.75s step-end infinite',
        fadeIn: 'fadeIn 1.5s ease forwards 3s', // Starts after typing
      },
    },
  },
  plugins: [],
};

export default config;
