//Print integers from 0 to 255, and with each integer print the sum so far.

let sum = 0; //make a counter for sum

for (let i = 0; i <= 255; i++) { //loop through nums
  sum = sum + i; //add each number together on every loop
  console.log(sum); //print the sum each time
}
