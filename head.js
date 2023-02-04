const head = array => array[0] || undefined;

const assertEqual = (actual, expected) => {
  console.log(actual === expected ? "Assertion Passed" : "Assertion Failed");
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);