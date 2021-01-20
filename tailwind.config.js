module.exports = {
  purge: [
    "./pages/**/*.js",
    "./components/**/*.js",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: {
          100: "#18A0FB",
        },
        backgroundColor: {
          main: "#FAFAFA",
        },
      },
      fontFamily: {
        primaryFont: [
          "Montserrat",
          "Nunito",
        ],
      },
      width: {
        coverpic: "60vw",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
