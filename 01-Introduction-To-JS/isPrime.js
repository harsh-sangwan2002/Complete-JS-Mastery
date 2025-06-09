let num = 2, flag = true;
// If a number is not divisible by the numbers b/w 2 and num-1 then the no is prime
// Or if no of factors are 2 then the no is prime

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        console.log(num, "is not a prime number.");
        flag = false;
        break;
    }
}

if (num != 1 && flag) {
    console.log(num, "is a prime number.");
}