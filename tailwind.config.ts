import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./views/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Persian Ancient Manuscript Palette
        manuscript: {
          paper: "#EFE3C6",  // Aged Manuscript Paper
          ink: "#1F1B17",    // Night Ink (Calligraphy Black)
          lapis: "#1F4E79",  // Lapis Lazuli Blue
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'serif'],
        garamond: ['var(--font-garamond)', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;

