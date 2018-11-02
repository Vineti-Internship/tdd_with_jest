import { sort } from './functions';

describe('Helper functions', () => {
  describe('sort function', () => {
    describe('in ascending order', () => {
      test('it sorts the array', () => {
        const arr = [1,2,6,6,3,3,100,6,3,1,2,32,31,32,3];
        const res = sort(arr, 'asc');
        expect(res).toEqual(arr.sort((a,b) => a-b));
      });
    });

    describe('in descending order', () => {
      test('it sorts the array', () => {
        const arr = [1,2,6,6,3,3,100,6,3,1,2,32,31,32,3];
        const res = sort(arr, 'desc');
        const sorted = arr.sort((a,b) => a-b).reverse();
        expect(res).toEqual(sorted);
      });
    });

    describe('when order is not given', () => {
      test('it takes ascending by default', () => {
        const arr = [1,2,6,6,3,3,100,6,3,1,2,32,31,32,3];
        const res = sort(arr);
        expect(res).toEqual(arr.sort((a,b) => a-b));
      });
    });
  });
});