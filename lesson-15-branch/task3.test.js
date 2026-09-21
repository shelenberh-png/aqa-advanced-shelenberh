/* global jest, describe, it, expect, beforeEach */
const axios = require('axios');

async function getUserData(userId) {
  try {
    const response = await axios.get(`https://api.example.com/users/${userId}`);
    return response.data;
  } catch (error) {
    throw new Error(`Помилка отримання користувача: ${error.message}`, { cause: error });
  }
}

jest.mock('axios');

describe('Завдання 3: Mocking Axios in Jest', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('має успішно повернути дані користувача при статус-коді 200', async () => {
    const mockUserData = { id: 1, name: 'Олексій', role: 'QA Engineer' };

    axios.get.mockResolvedValue({
      status: 200,
      data: mockUserData,
    });

    const result = await getUserData(1);

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/1');
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(result).toEqual(mockUserData);
  });

  it('має спіймати помилку та викинути коректний Error при 404/500', async () => {
    const errorMessage = 'Request failed with status code 404';

    axios.get.mockRejectedValue(new Error(errorMessage));

    await expect(getUserData(999)).rejects.toThrow(
      'Помилка отримання користувача: Request failed with status code 404'
    );

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/999');
  });
});
