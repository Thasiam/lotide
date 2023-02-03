const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`Assertion Passed: [actual] === [expected]`);
  } else {
    return console.log(`Assertion Failed: [actual] !== [expected]`);
  }
};

const tail = (list, start) => {
  //return all elements starting at start+1 to the of the list
  let result = [];
 
  //for loop on list
  for (const i = start + 1; i < list.length; i++) {
    result.push(list[i]);
  } 

  return result
}

const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words, 0);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
assertEqual(words.length, 3); // original array should still have 3 elements!