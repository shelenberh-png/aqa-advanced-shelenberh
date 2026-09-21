/* global jest, describe, it, expect */
const axios = require('axios');

async function fetchWithHeadersAndParams(url, customHeaders, params) {
  const response = await axios.get(url, {
    headers: customHeaders,
    params: params,
  });
  return response.data;
}

jest.mock('axios');

describe('Завдання 2: Testing Request Headers and Params', () => {
  it('має правильно передавати кастомні хедери та параметри в Axios', async () => {
    const testUrl = 'https://api.example.com/data';
    const testHeaders = {
      Authorization: 'Bearer secret-token-123',
      'Custom-Header': 'MyHeaderValue',
    };
    const testParams = { page: 1, limit: 10, search: 'jest' };
    const mockResponseData = { success: true, items: ['item1', 'item2'] };

    axios.get.mockResolvedValue({ data: mockResponseData });

    const result = await fetchWithHeadersAndParams(testUrl, testHeaders, testParams);

    expect(axios.get).toHaveBeenCalledWith(testUrl, {
      headers: testHeaders,
      params: testParams,
    });

    expect(result).toEqual(mockResponseData);
  });
});
