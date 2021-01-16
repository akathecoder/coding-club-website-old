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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
