// Write a function ​factorial(num)​ that, given a number, returns the product (multiplication) of all positive integers from 1 up to number (inclusive).


function factorial(num) {


let factNum = 1;

for (let i = 1; i <= num; i++) {
  factNum = factNum * i;
}
return factNum;

}
