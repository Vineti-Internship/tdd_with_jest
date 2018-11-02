import sortBy from 'lodash/sortBy';

// Red
// export const sorted = () => {};

// ----------------------------------------

// Green
// export const sort = (arr, order) => {
//   const sorted = [...arr];

//   for (let i = 0; i < sorted.length; i++){
//     for (let j = 0; j < sorted.length-i-1; j++){
//       if (sorted[j] > sorted[j+1]){
//         sorted[j] = sorted[j] + sorted[j+1];
//         sorted[j+1] = sorted[j] - sorted[j+1];
//         sorted[j] -= sorted[j+1]; 
//       }
//     }
//   }

//   return sorted;
// };

// --------------------------------------------

// Refactor
// export const sort = (arr, order) => {
//   const sorted = sortBy(arr);
//   return sorted;
// };

// -------------------------------------------

// Green
export const sort = (arr, order) => {
  const sorted = order === 'desc' ? sortBy(arr).reverse() : sortBy(arr);
  return sorted;
};