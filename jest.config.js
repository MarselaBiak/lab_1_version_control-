module.exports = {
  verbose: true,
  setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'node',
  reporters: [
    'default',
    ['./node_modules/@testomatio/reporter/lib/adapter/jest.js', { apikey: process.env.TESTOMATIO }]
  ],
};
