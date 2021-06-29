module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      green: {
        light: "#a1c181",
        dark: "#619b8a",
      },
      yellow: {
        light: "#F1DCA7",
        DEFAULT: "#fcca46",
      },
      orange: "#fe7f2d",
      dark: "#233d4d",
      grey: { light: "#D6CFCB", DEFAULT: "#adb5bd" },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
