// Replace any negative array values with ​'Dojo'​.

const array = [2, -2, 3, -3, 4, -4]; //create a random array with negative numbers

for (let i = 0; i < array.length; i++){ //loop through all nums in array to find negatives
  if (array[i] < 0) {
    array[i] = "Dojo"; //if the num is negative replace it with the string "Dojo"
  }
}

console.log(array);