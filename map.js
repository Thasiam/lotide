const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};
const words = ["ground", "control", "to", "major", "tom"];

// Test case 1: Map each word to its length
const results1 = map(words, word => word.length);
assertArraysEqual(results1, [6, 7, 2, 5, 3]); // expected output: [6, 7, 2, 5, 3]

// Test case 2: Map each word to its uppercase version
const results2 = map(words, word => word.toUpperCase());
assertArraysEqual(results2, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]); // expected output: ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]

// Test case 3: Map each word to its reversed version
const results3 = map(words, word => word.split('').reverse().join(''));
assertArraysEqual(results3, ["dnuorg", "lortnoc", "ot", "rojam", "mot"]); // expected output: ["dnuorg", "lortnoc", "ot", "rojam", "mot"]
