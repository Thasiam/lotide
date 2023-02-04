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

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

function without(source, itemsToRemove) {
  // Create a new array called "newArray"
  let newArray = [];

  // Loop through the "source" array
  for (let i = 0; i < source.length; i++) {
    // Create a variable called "shouldInclude" and set it to "true"
    let shouldInclude = true;

    // Loop through the "itemsToRemove" array
    for (let j = 0; j < itemsToRemove.length; j++) {
      // If the current element in the "source" array is equal to the current element in the "itemsToRemove" array
      if (source[i] === itemsToRemove[j]) {
        // Set "shouldInclude" to "false"
        shouldInclude = false;
        // Break out of the inner loop
        break;
      }
    }
    // If "shouldInclude" is still "true"
    if (shouldInclude) {
      // Push the current element from the "source" array into the "newArray"
      newArray.push(source[i]);
    }
  }
  // Return the "newArray"
  return newArray;
}