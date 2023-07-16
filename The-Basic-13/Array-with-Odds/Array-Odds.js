//Create an array with all the odd integers between 1 and 255 (inclusive).


let array = []; //make an empty array

for (let i = 1; i <= 255; i += 2){ //loop thru each number for 1-255, only printing odds
  array.push(i); //push odd number into the array
  } 

console.log(array); //print new array full of odds