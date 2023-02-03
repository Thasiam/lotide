const min = function(numbers) {
  numbers.sort(function(a,b) {
    return a - b;


  }); 
  return numbers[0];
};
const nums = [5, 10, 1,2,17];
console.log(min(nums));
