// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/pages/**/*.tsx',
    '!src/styles/**/*.ts',
    '!src/lib/**/*.ts',
    '!src/pages/api/**/*.ts',
    '!src/utils/tests/*.ts(x)?',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  snapshotSerializers: ['jest-stitches'],
};

module.exports = createJestConfig(customJestConfig);
