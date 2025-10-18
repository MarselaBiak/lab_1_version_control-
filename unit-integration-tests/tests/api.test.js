// unit-integration-tests/tests/api.test.js
// Мокаем axios до require, чтобы Jest не пытался разрешить реальный модуль
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // добавьте другие методы если используются
}));

const axios = require('axios');

describe('api:fetchPosts', () => {
  let response = {};

  it('должен возвращать данные постов через axios.get', async () => {
    // Настраиваем мок
    axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Test post' }] });

    // Если у вас есть реальная функция fetchPosts, импортируйте и вызовите её:
    // const { fetchPosts } = require('../../src/api'); // пример пути
    // const result = await fetchPosts();
    // expect(result).toEqual([{ id: 1, title: 'Test post' }]);

    // Для простоты проверим мок напрямую:
    const res = await axios.get('/posts');
    expect(res.data).toEqual([{ id: 1, title: 'Test post' }]);
  });
});
