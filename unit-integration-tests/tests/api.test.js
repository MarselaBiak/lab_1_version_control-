// unit-integration-tests/tests/api.test.js
// Сначала объявляем мок с фабрикой, чтобы Jest не пытался резолвить реальный пакет
jest.mock('axios', () => ({
  get: jest.fn(),
  post: jest.fn(),
  put: jest.fn(),
  delete: jest.fn(),
}));

const axios = require('axios');

describe('api:fetchPosts', () => {
  it('должен возвращать данные постов', async () => {
    axios.get.mockResolvedValue({ data: [{ id: 1, title: 'Test post' }] });

    const res = await axios.get('/posts');
    expect(res.data).toEqual([{ id: 1, title: 'Test post' }]);
  });
});
