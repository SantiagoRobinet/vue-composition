module.exports = {
  preset: "js-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.vue$": "vue3-jest",
  },
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "vue"],
};
