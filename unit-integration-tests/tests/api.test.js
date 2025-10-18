// РЕШЕНИЕ: мокаем axios до require
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  // добавьте другие методы, если они используются
}));

const axios = require('axios'); // теперь это мок

describe('api:fetchPosts', () => {
  it('должен возвращать данные постов (пример)', async () => {
    // настраиваем поведение мока
    axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Test' }] });

    // импортируете или вызываете вашу функцию, которая использует axios.get
    // const result = await fetchPosts(); // пример
    // expect(result).toEqual([{ id: 1, title: 'Test' }]);

    // Если у вас нет функции — просто проверим мок
    const res = await axios.get('/posts');
    expect(res.data).toEqual([{ id: 1, title: 'Test' }]);
  });
});
