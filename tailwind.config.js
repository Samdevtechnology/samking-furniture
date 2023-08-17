/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#183152",
        facebook: "#4267B2",
        googleBlue: "#4885ED",
        secondary: "#C4D7ED",
        tertiary: "#375D81",
        container: "#E1E6FA",
        container2: "#ABC8E2",
        offWhite: "#F5F5F3",
        textDark: "#333",
        danger: colors.red[400],
      },
      fontFamily: {
        primary: ["var(--font-poppins)"],
        secondary: ["var(--font-roboto)"],
      },
    },
  },
  plugins: [],
});
