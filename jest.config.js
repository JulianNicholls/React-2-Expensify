module.exports = {
  testURL: 'http://localhost:8080',
  setupFiles: ['raf/polyfill', '<rootDir>/src/tests/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer']
};
