const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const countLetters = function(sentence) {
  const letterCounts = {};

  for (let letter of sentence) {
    if (letter !== ' ') {
      letter = letter.toLowerCase();
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }

  return letterCounts;
};
const result = countLetters ("Lighthouse labs test recife");
console.log(result.e);
assertEqual(result.e, 4);