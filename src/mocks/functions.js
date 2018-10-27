export const squareWithTimeout = n => {
  return new Promise(resolve => setTimeout(() => {
    resolve(n**2);
  }, 3000));
};

export const getData = async () => {
  const response = await fetch('https://api.github.com/users/narghev');
  const result = await response.json();

  return result;
};

export const randomChecker = () => {
  const n = Math.random();

  return n >= 0.5;
};
