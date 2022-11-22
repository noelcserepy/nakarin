/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        technor: ["var(--font-technor)", "sans-serif"],
        switzer: ["var(--font-switzer)", "sans-serif"],
        switzerItalic: ["var(--font-switzer-italic)", "sans-serif"],
        bespokeSlab: ["var(--font-bespokeSlab)", "sans-serif"],
        bespokeSlabItalic: ["var(--font-bespokeSlab-italic)", "sans-serif"],
      },
      colors: {
        light: "#ECEEEF",
        mid: "#D0D7D8",
        mid2: "#4A545F",
        dark: "#090B0C",
        beige: "#E4CC9F",
        beigelight: "#E4DFD5",
        herobg: "#7B818A",
      },
    },
  },
  plugins: [],
};
