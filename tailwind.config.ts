import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // 'Plus Jakarta Sans' is excellent for a "welcoming" tech look
        display: ['var(--font-display)', 'Plus Jakarta Sans', 'system-ui'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      colors: {
        // Replaced electricCyan with a sophisticated Indigo-Blue
        primary: {
          light: '#7DD3FC', // Sky 300
          DEFAULT: '#0EA5E9', // Sky 500 (Welcoming & Professional)
          dark: '#0369A1', // Sky 700
        },
        // Replaced warmGold with a softer Amber for better contrast
        accent: '#F59E0B', 
        // Neutral palette for a clean interface
        background: '#FAFAFA',
        foreground: '#0F172A',
      }
    },
  },
  plugins: [],
};
export default config;