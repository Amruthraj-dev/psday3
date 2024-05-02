// Write a program to print the factorial of a number in the below format.
// input: 5
// output:
// 1*2*3*4*5=120
// input:3
// 1*2*3=6

const prompt = require("prompt-sync")();
num=prompt("enter a number : ")
prod=1
s=" "
for(i=1;i<=num;i++)
{
    prod=prod*i
    s=s+i+"*"
}
console.log(s+"="+prod)


