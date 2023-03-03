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

const assertArraysEqual = function(array1, array2) {
  //Step 1: Check if both arrays are equal
  let arraysAreEqual = eqArrays(array1, array2);

  //Step 2: If both arrays are equal, print "Assertion Passed" message
  if (arraysAreEqual) {
    console.log(`Assertion Passed: ${array1} === ${array2}`);

  //Step 3: If both arrays are not equal, print "Assertion Failed" message
  } else {
    console.log(`Assertion Failed: ${array1} !== ${array2}`);
  }
};
//Test Code//
const testResult = letterPositions("hello");
assertArraysEqual(testResult["h"], [0]);
assertArraysEqual(testResult["e"], [1]);
assertArraysEqual(testResult["l"], [2, 3]);
assertArraysEqual(testResult["o"], [4]);
