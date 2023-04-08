/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xxs: "300px",
      xs: "390px",
      s: "425px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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

        mainBlue: "#060B27",
        secBlue: "#0E1330",
        threeblue: "#090D27",
        fourblue: "#181D38",

        oran: "#FEB95A",
        oranGrad1: "#FF9A61",
        oranGrad2: "#FFC654",

        grey: "#87888C",
        grey2: "#282D45",
        grey3: "#8F9BB7",
      },
      backgroundImage: {
        overlay: `url('./Assets/lines.svg')`,
      },
    },
  },
  plugins: [],
};
