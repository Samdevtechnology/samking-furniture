/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#183152",
        secondary: "#C4D7ED",
        tertiary: "#375D81",
        container: "#E1E6FA",
        textDark: "#333",
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
});
