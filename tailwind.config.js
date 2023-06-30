/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-900": "#10101a",
        "purple-800": "#1e1e31",
        "purple-700": "#1d1d2ea7",
        "purple-600": "#3a3a688d",
        yellow: "#6cd0ee",
        pink: "#f56f9c",
      },
    },
  },
  plugins: [],
};
