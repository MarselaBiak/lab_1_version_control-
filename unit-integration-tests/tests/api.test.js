const axios = require('axios');
jest.mock('axios');

const { fetchPosts } = require('../../src/api');

describe('api:fetchPosts', () => {
  test('отримання постів зі стороннього API', async () => {
    const response = {
      data: [
        { id: 1, title: 'Тестова назва 1' },
        { id: 2, title: 'Тестова назва 2' }
      ]
    };

    axios.get.mockResolvedValue(response); // ✅ асинхронний мок

    const posts = await fetchPosts();

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(posts).toBeInstanceOf(Array);
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[1].id).toEqual(2);
    expect(posts[1].title).toEqual('Тестова назва 2');
  });
});
