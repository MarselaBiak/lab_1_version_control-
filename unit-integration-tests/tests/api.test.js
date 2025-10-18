// Пример: мокаем axios до require
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // добавьте другие методы, если используются
}));

const axios = require('axios');

describe('api:fetchPosts', () => {
  it('должен возвращать данные постов через axios.get', async () => {
    // настраиваем поведение мока
    axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Test post' }] });

    // Если у вас есть функция fetchPosts, которая вызывает axios.get, импортируйте её:
    // const { fetchPosts } = require('../../src/api'); // пример пути
    // const result = await fetchPosts();
    // expect(result).toEqual([{ id: 1, title: 'Test post' }]);

    // Если функции нет — проверим работу мока напрямую:
    const res = await axios.get('/posts');
    expect(res.data).toEqual([{ id: 1, title: 'Test post' }]);
  });
});
