/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
      display: ["JetBrains Mono", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        primary: "url('/img/bg.webp')",
      },
    },
  },
  plugins: [],
};
