module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'lato': ['Lato', 'sans-serif'],
    },
    textColor: {
      'primary': '#f5896e',
      'secondary': '#455fff',
      'white': '#fff',
      'red': "#C20000",
    },
    backgroundColor: {
      'primary': '#fec',
      'secondary': '#fa824c',
      'background': '#ffdac8',
      },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
