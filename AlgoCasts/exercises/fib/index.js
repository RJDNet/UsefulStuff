// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//   let fibarray = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     fibarray.push((fibarray[i - 1]) + (fibarray[i - 2]));

//   }
//   return fibarray[n];
// }

// function fib(n) {
//   if (n < 2) {
//    return n;
//   }

//   return fib(n - 1) + fib(n - 2)
// }

// function memoize(fn) {
//   const cache = {};
//   return function (...args) {
//     if (cache[args]) {
//       return cache[args];
//     }

//     const result = fn.apply(this, args);
//     cache[args] = result;

//     return result;
//   }
// }




// function fib(n) {
//   if (n < 2) return n;

//   return fib(n - 1) + fib(n - 2)
// }

// fib = memoize(fib);


// Super small cached version
function fib(n, cache = {}) {
  if (cache[n]) return cache[n];

  const fibNumber = n < 2 ? n : fib(n - 1, cache) + fib(n - 2, cache);
  cache[n] = fibNumber;

  return fibNumber;
}

module.exports = fib;
