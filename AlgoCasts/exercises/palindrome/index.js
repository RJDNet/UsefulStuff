// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//   const rev = str.split('').reduce((a, c) => c + a, '');
//   return str === rev;
// }

// function palindrome(str) {
//   return str.split('').every((c, i) => {
//     return c === str[str.length - i - 1];
//   });
// }

function palindrome(str) {
  let i = 0;
  let j = str.length - 1;

  while (i <= j) {
    if (str[i] !== str[j]) {
      return false
    }
    i++
    j--
  }
  return true;
}


module.exports = palindrome;
