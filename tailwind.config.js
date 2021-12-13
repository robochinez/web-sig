const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: { cus: "1200px", embed: "400px" },
      backgroundImage: {},
      boxShadow: {
        "3xl": "0 10px 20px 0  rgba(0, 0, 0, 0.6)",
      },
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
        teal: colors.teal,
        brown: {
          DEFAULT: "#705B5B",
        },
      },
    },
  },
  variants: {
    extend: {
      scrollBehavior: ["motion-safe", "motion-reduce", "responsive"],
    },
  },
  plugins: [require("tailwind-scroll-behavior")()],
};
