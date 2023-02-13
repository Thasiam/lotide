const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`Assertion Failed: [actual] !== [expected]`);
  }
};
const countLetters = function("lighthouse in the house") {
  const letterCounts = {};

  for (let letter of lighthouse in the house) {
    if (letter !== ' ') {
      letter = letter.toLowerCase();
      if (letterCounts[letter]) {
        letterCounts[letter]++;
      } else {
        letterCounts[letter] = 1;
      }
    }
  }
  console.log(letterCounts);
  return letterCounts;
};
