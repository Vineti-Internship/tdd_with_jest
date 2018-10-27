import {sum, factorial} from './functions';

describe('Helper functions', () => {
  describe('Sum function', () => {
    it('returns the sum of two numbers', () => {
      expect(sum(2,5)).toBe(7);
      expect(sum(1, 2)).toBe(3);
      expect(sum(5, 1)).toBe(6);
      expect(sum(11, 6)).toBe(17);
      expect(sum(64, 1)).toBe(65);
      expect(sum(0, 134)).toBe(134);
    });

    it('returns the sum of two random numbers', () => {
      for(let i = 0; i <= 10; i++){
        const n1 = Math.floor(Math.random()*100);
        const n2 = Math.floor(Math.random()*100);
        const s = n1 + n2;
        expect(sum(n1, n2)).toBe(s);
      }
    });
  });
});