/* global jest, describe, it, expect */
const axios = require('axios');

async function fetchInvalidData() {
  try {
    await axios.get('https://jsonplaceholder.typicode.com/invalid-endpoint-404');
  } catch (error) {
    throw new Error('Не вдалося завантажити дані: запит завершився помилкою', { cause: error });
  }
}

jest.mock('axios');

describe('Завдання 1: Перевірка обробки помилки Axios', () => {
  it('має спіймати помилку та повернути належне повідомлення', async () => {
    axios.get.mockRejectedValue(new Error('Request failed with status code 404'));

    await expect(fetchInvalidData()).rejects.toThrow(
      'Не вдалося завантажити дані: запит завершився помилкою'
    );
  });
});
