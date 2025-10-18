// unit-integration-tests/tests/api.test.js

// 1) мокаем модуль с фабрикой — тогда jest не будет требовать реальный пакет
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // добавьте нужные методы
}));

const axios = require('axios'); // теперь это мок

describe('api:fetchPosts', () => {
  it('должен ...', async () => {
    axios.get.mockResolvedValue({ data: [] });
    // тестируем функцию, которая использует axios.get
  });
});
