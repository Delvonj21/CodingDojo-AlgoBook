//Given an array, find and print its largest element.

const array = [2, 4, 7, 9, 5];
let maxNumber = array[0]; //create an array

for (let i = 1; i < array.length; i++){
  
 if (array[i] > maxNumber) {
  maxNumber = array[i];
 }
}

console.log(maxNumber);
