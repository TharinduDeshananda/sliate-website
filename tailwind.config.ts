import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'floatUp 10s linear, fadeOut 10s linear',
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(-100%)' },
        },
        fadeOut: {
          '0%': { opacity: "1" },
          '100%': { opacity: "0" },
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
  darkMode:'class'
  
} satisfies Config;
