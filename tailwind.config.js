/** @type {import('tailwindcss').Config} */
const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
