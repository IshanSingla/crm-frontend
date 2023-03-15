/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: "'Poppins', sans-serif",
        mon: "'Montserrat', sans-serif",
      },
      boxShadow: {
        boxshadow: "10px 10px 20px #dde2ff80",
      },
      colors: {
        primBlack: "#1A1B1E",
        secBlack: "#21222D",
        primWhite: "#F6F6FB",
        secWhite: "#FFFFFF",
        orange: "#FEB95A",
        grey: "#87888C",
      },
    },
  },
  plugins: [],
};
