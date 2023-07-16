// Given an array and a value Y, count and print the number of array values greater than Y.


let array = [2, 8, 12, 10, 6];
let Y = 7;
let biggerValue = 0; 

for (let i = 0; i < array.length; i++){
  if (array[i] > Y) {
    biggerValue++; 
  }
}

console.log(biggerValue);



