// task3  Write a program to print the sum of prime numbers in the fibonacci series.
// input: 10
// output: 23 (0 1 1 2 3 5 8 13 21 34)

const prompt = require("prompt-sync")();
let num = prompt("enter a number : ");
let n1 = 0;
let n2 = 1;
let s = "";
let c = 0;
primes = 0;
arr = [];
for (i = 1; i <= num; i++) {
  s += n1 + " ";
  if (n1 > 1) {
    c = 0;
    for (j = 2; j < n1; j++) {
      if (n1 % j == 0) {
        c++;
        break;
      }
    }
    if (c == 0) {
      arr.push(n1);
      primes += Number(n1);
    }
  }
  n3 = n1 + n2;
  n1 = n2;
  n2 = n3;
}
console.log("fibonacci series of " + num + " : " + s);
console.log("Prime numbers in fibonacci series : ", arr);
console.log("Sum of prime numbers in fibonacci series: ", primes);