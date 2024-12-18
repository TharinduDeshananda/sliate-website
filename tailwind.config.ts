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
        'rainbow-border': 'rainbow 2s linear infinite'
      },
      keyframes: {
        rainbow: {
          '0%': { 
            borderColor: 'red',
            boxShadow: '0 0 10px red'
          },
          '20%': { 
            borderColor: 'orange',
            boxShadow: '0 0 10px orange'
          },
          '40%': { 
            borderColor: 'yellow',
            boxShadow: '0 0 10px yellow'
          },
          '60%': { 
            borderColor: 'green',
            boxShadow: '0 0 10px green'
          },
          '80%': { 
            borderColor: 'blue',
            boxShadow: '0 0 10px blue'
          },
          '100%': { 
            borderColor: 'purple',
            boxShadow: '0 0 10px purple'
          }
        }
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
