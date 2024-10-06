module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "\\.(svg)$": "<rootDir>/__mocks__/svgMock.js",
  },
  transformIgnorePatterns: ["<rootDir>/node_modules/"],
  transformIgnorePatterns: ["/node_modules/(?!your-module-to-transform)"],
};
