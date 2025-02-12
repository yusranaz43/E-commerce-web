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
        customBlue: '#0b0a40',
        customSky: '#2ac8d4',
        customSeaGreen: '#90e2e8',
        customLightBlue: 'rgba(45, 139, 192, 0.75)', // 75% opacity
        cSky: "#23A6F0",
       
      },
    },
  },
  plugins: [],
};
export default config;
