import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "#384261",
        white: '#FFFFFF',
        black: '#000000',
        bbrom: '#4D3B35',
        transparent: 'transparent',
        background: "#f9f9f9",
        primary: "#c59861",
      },
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        abril: ['Abril Fatface', 'serif'],
      },
      rotate: {
        270: '270deg',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar"),
  ],
};
export default config;
