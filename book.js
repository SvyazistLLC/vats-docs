var pkg = require("./package.json");

module.exports = {
  plugins: ["theme-default-extend"],
  title: "Документация ВАТС",
  gitbook: "3.0.0",
  language: "ru",
  variables: {
    version: pkg.version
  },

};
