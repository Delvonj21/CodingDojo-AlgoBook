// Sum To One Digit
// Implement a function ​sumToOne(num)​ that, given a number, sums that number’s digits repeatedly until the sum is only one digit. Return that final one digit result.

function sumToOne(num) {
  while (num>= 10) { //loop through all double digit numbers and as soon as its single digit, STOP! >=10
    let sum = 0; //put sum at 0 to start a counter. 
    while (num > 0) {
      sum += num % 10;
      num = Math.floor(num / 10); //round down the number with Math.floor.
    }
    num = sum;
  }
  return num;
}

console.log(sumToOne(9000));