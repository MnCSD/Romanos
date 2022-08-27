/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadein: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        trans: {
          "0%": { transform: "translateY(-200px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },

      animation: {
        fadein: "fadein 1s linear",
        trans: "trans 0.5s linear",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
