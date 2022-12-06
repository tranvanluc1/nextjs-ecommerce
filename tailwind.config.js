/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      sm: "450px",
      // => @media (min-width: 450px) { ... }

      md: "1024px",
      // => @media (min-width: 1024px) { ... }

      lg: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
    colors: {
      blue: "#1fb6ff",
      purple: "#7e5bef",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      yellow: "#ffc82c",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      black: "#000",
      white: "#fff",
    },
  },
  plugins: [],
};
