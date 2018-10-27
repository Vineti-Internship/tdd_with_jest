import { squareWithTimeout, getData, randomChecker } from './functions';
import fetchMock from 'jest-fetch-mock';

describe('square with timeout', () => {
  
  beforeAll(() => {
    window.setTimeout = jest.fn(callback => {
      callback();
    });
  });

  test('returns the square of a number', async () => {
    const result = await squareWithTimeout(5);
    expect(result).toBe(25);
  });
});

describe('getData function', () => {
  let response = '{"user": "hello"}';
  beforeAll(() => {
    window.fetch = fetchMock;
    window.fetch.mockResponse(response);
  });

  test('returns the data came from fetch', async () => {
    const result = await getData();
    expect(result).toEqual(JSON.parse(response));
  });
});

describe('getData function', () => {
  beforeAll(() => {
    Math.random = jest.fn()
      .mockReturnValueOnce(0.6)
      .mockReturnValueOnce(0.1);
  });

  test('returns true if random n is more than 0.5', () => {
    const res = randomChecker();
    expect(res).toBe(true);
  });

  test('returns false if random n is less than 0.5', () => {
    const res = randomChecker();
    expect(res).toBe(false);
  });
});