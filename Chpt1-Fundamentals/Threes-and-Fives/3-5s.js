// Create function ​ThreesFives()​ that adds each value from 100 and 4000000 (inclusive) if that value is evenly divisible by 3 or 5 ​but not both​. Display the final sum in the console.
// Change your function to make a ​BetterThreesFives(start,end)​where ​start​ and ​end values are customizable.

function BetterThreesFives(start, end) {
  
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0)){
      sum += i;
    } 
  }
  console.log(sum);
}

BetterThreesFives(100, 4000000);

