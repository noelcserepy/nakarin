/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-switzer)", ...fontFamily.sans],
        switzer: ["var(--font-switzer)", "sans-serif"],
        technor: ["var(--font-technor)", "sans-serif"],
        switzerItalic: ["var(--font-switzer-italic)", "sans-serif"],
        bespokeSlab: ["var(--font-bespokeSlab)", "sans-serif"],
        bespokeSlabItalic: ["var(--font-bespokeSlab-italic)", "sans-serif"],
      },
      colors: {
        light: "#ECEEEF",
        dark: "#090B0C",
        mid: "#D0D7D8",
        mid2: "#4A545F",
        beige: "#A77946",
        beigelight: "#E4DFD5",
        herobg: "#7B818A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        vignette: "radial-gradient(circle, transparent 50%, #090B0C 110%)",
      },
      aspectRatio: {
        "3/2": "3 / 2",
      },
    },
  },
  plugins: [],
};
