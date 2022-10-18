/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Poppins, sans-serif",
      },
      colors: {
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "dark-card": "#363636",
      },
    },
  },
  plugins: [],
};
