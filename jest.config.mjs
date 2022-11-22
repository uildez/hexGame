export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: "coverage",

  // Indicates which provider should be used to instrument code for coverage
  coverageProvider: "v8",

  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
    "node_modules/variables/.+\\.(j|t)sx?$": "babel-jest",
  },

  transformIgnorePatterns: [
    "node_modules/(?!(jest-)?react-native|react-(native|universal|navigation)-(.*)|@react-native-community/(.*)|@react-navigation/(.*)|bs-platform|@rootstrap/redux-tools)",
  ],

  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  testEnvironment: "jsdom",

  testMatch: [
    "**/__tests__/**/*.test.js?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  setupFilesAfterEnv: ["<rootDir>/src/__tests__/setup.js"],
};
