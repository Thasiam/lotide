const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ["Hello", "Lighthouse", "Labs"];
const result = tail(words);
console.log(result);
console.log(assertEqual(tail(words).length, 2));