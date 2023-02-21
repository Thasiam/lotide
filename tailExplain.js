const assertEqual = function (actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`Assertion Failed: [actual] !== [expected]`);
  }
};

//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
//Your function should not modify the array that is passed in. It should return a new array.

const tail = (arr) => {
  // if the lenght of the array is equal to 1 or less the 1, than will return a empty array because the function does not require the first item of the array.
  if (arr.length === 1) {
    return [];
  }
//the solution would be looping thrught the array, start from index 1 because the tail function donst not require the head of the array, wicth is index 0. WHile looping thrugt the array we push the each item into the result array. The result return the array.
//console.log(arr.slice(1));
return arr.slice(1);

  let result = [];
  for (let i = 1; i < arr.length; i++) {
  
  result.push(arr[i]);
  }
  console.log(result);
  return result;
};

[1, 2, 3] === [1, 2, 3] // => false
[1, 2, 3] == [1, 2, 3] // => false

const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
console.log(result);
//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
//assertEqual(words.length, 3); // original array should still have 3 elements!