module.exports = {
  setupFiles: ['<rootDir>/jest.setup.js'],
  testPathIgnorePatterns: [
    '<rootDir>/build/',
    '<rootDir>/node_modules/',
    '<rootDir>/cypress'
  ],
  collectCoverageFrom: [
    './**/*.{ts,tsx}',
    '!./**/*.d.ts',
    '!src/**/*.stories.{ts,tsx}',
    '!src/**/*.styles.{ts,tsx}'
  ],
  coverageReporters: ['text', 'json-summary'],
  moduleNameMapper: {
    'react-i18next': '<rootDir>/__mocks__/i18n.js',
    '\\.(jpg|jpeg|png|gif|svg)': '<rootDir>/__mocks__/pictureMock.js',
    '\\.css$': '<rootDir>/__mocks__/styleMock.js'
  }
};
