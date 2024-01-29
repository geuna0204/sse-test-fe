module.exports = {
  preset: "ts-jest",
  testEnvironment: "jsdom", // test할 때 dom API 사용하면 jsdom, 사용하지 않으면 node
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // import 시, "@/file"을 하면 "<rootDir>/src/file"을 가져온다.
  },
  roots: ["<rootDir>"],
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts", "js", "json", "node"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};

export {};
