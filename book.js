var pkg = require("./package.json");

module.exports = {
  plugins: ["theme-default-extend"],
  title: "ДОКУМЕНТАЦИЯ ВАТС",
  gitbook: "3.0.0",
  variables: {
    version: pkg.version
  },
  boook: { language: "ru" }
};
