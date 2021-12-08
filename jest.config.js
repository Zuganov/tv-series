// jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets')

module.exports = {
  ...tsjPreset,
  preset: '@testing-library/react-native',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.spec.json',
      babelConfig: true,
    },
  },
  testRegex: '(/src/.*.(test))\\.(js|ts)x?$',
  testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.jsx$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png)$': '<rootDir>/__mocks__/imageMock.js',
    '\\.svg': '<rootDir>/__mocks__/svgMock.js',
  },
  cacheDirectory: '.jest/cache',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  setupFiles: ['<rootDir>/jest/setup.ts'],
}
