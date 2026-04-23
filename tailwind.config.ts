import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        "gray-100": "var(--gray-100)",
        "gray-200": "var(--gray-200)",
        "gray-400": "var(--gray-400)",
        "gray-600": "var(--gray-600)",
      },
      fontFamily: {
        serif: "var(--serif)",
        "body-serif": "var(--body-serif)",
        "sub-serif": "var(--sub-serif)",
      },
    },
  },
  plugins: [],
};
export default config;
