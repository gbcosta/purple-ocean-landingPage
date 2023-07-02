/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 30px 60px -20px rgba(0, 0, 0, 0.45)",
      },
      colors: {
        "purple-900": "#10101a",
        "purple-800": "#1e1e31",
        "purple-700": "#1d1d2ea7",
        "purple-600": "#3a3a688d",
        yellow: "#eeec67",
        pink: "#f56f9c",
        primary: "#10101a",
        secondary: "#1e1e31",
        terciary: "#1d1d2ea7",
        quaternary: "#3a3a688d",
        lightPurple: "#49499b",
        white: "#d3d3d3",
        darkPurple: "#09090f",
        gray: "#909090",
        red: "#fb5858",
        palePurple: "#c678dd",
        lightBlue: "#6cd0ee",
        green: "#6eff71",
        lightGreen: "#72cb74",
      },
    },
  },
  plugins: [],
};
