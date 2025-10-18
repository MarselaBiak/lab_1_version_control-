// Глобальный мок axios — выполняется до тестов и предотвращает ошибку "Cannot find module 'axios'"
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));
