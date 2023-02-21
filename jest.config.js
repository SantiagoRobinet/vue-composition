/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.vue$": "vue3-jest",
  },
  moduleFileExtensions: ["json", "js", "jsx", "ts", "tsx", "vue"],
};
