export const sum = (a, b) => a + b;

export const factorial = n => {
  if (n === 1) return 1;
  return n * factorial(n-1);
};