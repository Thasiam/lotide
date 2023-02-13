const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  return results;
};

//Test Code//
assertArraysEqual(letterPositions("hello").e, [1]);

const assertArraysEqual = function(actual, expected) {
  if (actual.length !== expected.length) {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
    return;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }
  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);



const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`Assertion Failed: [actual] !== [expected]`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

const assertEqual = function(actual, expected) {
  if (actual === expected) {
     return console.log(`Assertion Passed: [actual] === [expected]`);
   } else {
     return console.log(`Assertion Failed: [actual] !== [expected]`);
   }
 }
   const eqArrays = function(array1, array2) {
   if (array1.length !== array2.length) {
     return false;
   }
 
   for (let i = 0; i < array1.length; i++) {
     if (array1[i] !== array2[i]) {
       return false;
     }
   }
   return true;
 };
 assertEqual (eqArrays([1, 2, 3], [1, 2, 3]), true);
 assertEqual (eqArrays([1, 2, 3], [3, 2, 1]), false);
 eqArrays([1, 2, 3], [1, 2, 3]) // => true
 eqArrays([1, 2, 3], [3, 2, 1]) // => false
 
 assertEqual (eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
 assertEqual (eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
 eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
 eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false