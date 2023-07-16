// Given an array, print the max, min and average values for that array.

function findMaxMinAverage(array) {  //make a function and make sure the array isn't empty to continue
  if (array.length === 0) {
    console.log("Array is empty.");
    return;
  }

let maxValue = array[0]; //counter for max value
let minValue = array[0]; // counter for min value
let sum = 0; //sum counter

for (let i = 0; i < array.length; i++) { 
 const currentNum = array[i];

 if (currentNum > maxValue) { //update maxValue if currentNum is bigger 
  maxValue = currentNum;
 }

 if (currentNum < minValue) { //update minValue if currentNum is smaller
  minValue = currentNum;
 }

 sum += currentNum; //find sum of all values in array 
}

const average = sum / array.length; //calculate the average of array

console.log("Max value:", maxValue);
console.log("Min value:", minValue);
console.log("Average value:", average);
}

const array = [2, 56, 67, 7, 9, 102];
findMaxMinAverage(array);





