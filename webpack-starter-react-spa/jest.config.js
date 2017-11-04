module.exports = {
  cacheDirectory: '<rootDir>/.cache/jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/test/stubs/fileStub.js',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  setupFiles: [
    '<rootDir>/test/setup/shim.js',
    '<rootDir>/test/setup/enzyme.js'
  ],
  coverageReporters: ['json', 'lcov', 'html', 'text'],
  coverageDirectory: '<rootDir>/build/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test/'
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 70,
      statements: 70
    }
  }
};
