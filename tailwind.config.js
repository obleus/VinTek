module.exports = {
  content: ["./public/javascript/*.js", "./views/**/*.handlebars"],
  theme: {
    colors: {
      offwhite: "#f2f2f2",
      pink: "#d941bf",
      purple: "#6e34bf",
      "dark-purple": "#1d1c40",
      yellow: "#f29f05",
    },
    extend: {
      fontFamily: {
        "press-start": ['"Press Start 2P"', "cursive"],
        "open-sans": ["'Open Sans'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
