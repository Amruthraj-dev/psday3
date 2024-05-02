const prompt = require("prompt-sync")();
var num = +prompt("enter a number: ");
lprime = 0;
rprime = 0;
let check=true


for (i = num; i > 1; i--) {
  for (j = 2; j < i; j++) {
    check = true;
    if (i % j == 0) {
      check = false;
      break;
    }
  }
  if (check) {
    lprime = i;
    break;
  }
}

for (x = num; x > num; x++) {
  for (y = 2; y < x; y++) 
  {
    c = true;
    if (x % y == 0) 
    {
      c=false;
      break;
    } 
  }
  if (c) {
    rprime = x;
    break;
  }
}
// console.log(rprime);
diff = num - lprime;
diff1 = rprime - num;
if (diff > diff1) {
  console.log(`Nearest prime number is ${lprime}`);
} else if (diff == diff1) {
  console.log(`Null`);
} else if (diff < diff1) {
  console.log(`Nearest prime number is ${rprime}`);
}