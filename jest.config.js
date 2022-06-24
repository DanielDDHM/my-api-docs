// @ts-check
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, 'envs', 'test.env') })

module.exports = {
  preset: 'ts-jest',
  verbose: true,
  testMatch: ['<rootDir>/src/**/*.(test|spec).t(s|sx)'],
  modulePathIgnorePatterns: ['node_modules', 'build'],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
  },
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: -40
    }
  },
};
