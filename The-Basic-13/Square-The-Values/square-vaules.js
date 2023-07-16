// Square each value in a given array, returning that same array with changed values.

//make an array of numbers
const arr = [2, 4, 5, 6];

//loop through each number in array and square them
for (let i = 0; i < arr.length; i++) {
  arr[i] = arr[i] ** 2; //take those squared numbers and plug them back into the array
  
}
// console log the new array; 
console.log('This is a squared array', arr);

