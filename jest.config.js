module.exports = {
    roots: [
      "<rootDir>/components",
      "<rootDir>/services",
      "<rootDir>/pages"
    ],
    testMatch: [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    transform: {
      "^.+\\.(ts|tsx)$": "ts-jest"
    }
  }