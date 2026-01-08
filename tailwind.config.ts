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
      // Custom breakpoints for book layout
      screens: {
        'xs': '475px',
        // sm: '640px', (default)
        // md: '768px', (default)
        // lg: '1024px', (default) - Double page book starts here
        // xl: '1280px', (default)
        '2xl': '1536px',
      },
      // Custom spacing for book elements
      spacing: {
        'book-sm': '90vh',
        'book-md': '95vh',
      },
      // Custom border radius matching the small borders requirement
      borderRadius: {
        'manuscript': '2px',
      },
      // Line clamp utilities for text truncation
      lineClamp: {
        1: '1',
        2: '2',
        3: '3',
      },
    },
  },
  plugins: [],
};

export default config;

