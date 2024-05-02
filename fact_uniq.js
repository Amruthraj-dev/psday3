//task1 Write a program to print the factorial of every digit in the number, do not consider a digit if it is repeated.

// input: 335645
// output: 6 120 720 24

const prompt = require("prompt-sync")();
num = prompt("enter a number : ");

res = "";
s=""
for (i of num) {
  if (res.indexOf(i) === -1) {
    res = res + i;
  }
}
console.log(res);
for (n of res) {
  prod = 1;
  for (j = 1; j <= n; j++) {
    prod = prod * j;
    s+=prod+" "
  }
  console.log(s);
}