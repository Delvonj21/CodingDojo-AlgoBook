// Return the given array, after setting any negative values to zero.

//make an array with some negative numbers
const zeroOutArray = [-1, 2, -3, -4, 5]; 
//loop thru array finding any negatives 
//numbers
for (let i = 0; i < zeroOutArray.length; i++){
   if (zeroOutArray[i] < 0) { 
    zeroOutArray[i] = 0; //once a negative number is found, replace that number with a "O"
  }
}

// console log the new array
console.log(zeroOutArray);