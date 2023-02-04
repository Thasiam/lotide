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

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};
};


// Test cases for arrays with one or two elements
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

// Test cases for arrays with odd number of elements
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// Test cases for arrays with an even number of elements
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);