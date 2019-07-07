// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return helper(stringA) === helper(stringB);
}

function helper(h) {
  return h.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}


// function anagrams(stringA, stringB) {
//   const oa = helper(stringA);
//   const ob = helper(stringB);

//   if (Object.keys(oa).length !== Object.keys(ob).length) {
//     return false;
//   }

//   for (let char in oa) {
//     if (oa[char] !== ob[char]) {
//       return false;
//     }
//   }
//   return true

// }

// function helper(work) {
//   const ha = {};

//   for (let char of work.replace(/[^\w]/g, '').toLowerCase()) {
//     ha[char] = ha[char] + 1 || 1;
//   }

//   return ha;
// }

module.exports = anagrams;
