// Implement ​generateCoinChange(cents)​ that accepts a parameter for the number of cents, and computes how to represent that amount with the smallest number of coins. Console.log the result.

function generateCoinChange(cents) {
  
  let quarters = 0;
  let dimes = 0;
  let nickels = 0;
  let pennies = 0;

  if (Math.floor(cents / 25) > 0) {
    quarters = Math.floor(cents / 25);
    cents -= (quarters*25)
  }

  if (Math.floor(cents / 10) > 0) {
    dimes = Math.floor(cents / 10);
    cents -= (dimes*10)
  }
  if (Math.floor(cents / 5) > 0) {
    dimes = Math.floor(cents / 5);
    cents -= (nickels*5);
  }

  pennies = cents;

  console.log("quarters: ", quarters);
  console.log("dimes: ", dimes);
  console.log("nickels: ", nickels);
  console.log("pennies ", pennies);

}

generateCoinChange(99);