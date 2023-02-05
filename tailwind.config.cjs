/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBG: "#001235",
        danger: "#EA4C89",
        lightBG: "#D6E4E5",
        mainTed: "#C31C58",
        "darkBG-2": "#01407A",
        "orange-2": "#EA5933",
        "green-2": "#297980",
        "brown-2": "#9F616A",
      },
      fontFamily: {
        Lobster: ["Lobster", "cursive"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
