// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const newArray = [];
  let index = 0;

  while (index < array.length) {
    newArray.push(array.slice(index, index + size));
    index += size;
  }

  return newArray;
}

// Mutates original array with splice

// function chunk(array, size) {
//   const newArray = [];

//   while (array.length) {
//     const spliced = array.splice(0, size);
//     newArray.push(spliced);
//   }

//   return newArray;
// }

// function chunk(array, size) {
//   const newArray = [];

//   const makeChunk = () => {
//     if (!array.length) return newArray;
//     let tempChunk = array.splice(0, size);
//     newArray.push([...tempChunk])
//     return makeChunk();
//   }

//   return makeChunk();
// }

module.exports = chunk;
