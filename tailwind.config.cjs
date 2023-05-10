/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "nature-light": "url('./assets/image/main.png')",
        "avatar-pic": "url('./assets/image/avatar.jpg')",
        "search-pic": "url('./assets/image/search.png')",
        "trending-pic": "url('./assets/image/trending.jpg')",
        "trend-pic": "url('./assets/image/trend.png')",
        "tren-pic": "url('./assets/image/tren.jpg')",
        "location-pic": "url('./assets/image/map.png')",
        "event-pic": "url('./assets/image/events.jpg')",
        "wendy-pic": "url('./assets/image/wendy.jpg')",
        "main-pic": "url('./assets/image/main.jpg')",
        "photo-pic": "url('./assets/image/photo.jpg')",
        "photo1-pic": "url('./assets/image/event4.avif')",
        "photo2-pic": "url('./assets/image/event2.avif')",
        "photo3-pic": "url('./assets/image/event3.avif')",
        mainBG: "url('./assets/image/pexel.jpg')",
      },
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
