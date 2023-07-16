// Analyze an array’s values and print the average.

const array = [100, 200, 300, 400];
let sum = 0;


for (let i = 0; i < array.length; i++){
  sum = sum + array[i]; 
}

let average = sum / array.length;
console.log(average);

