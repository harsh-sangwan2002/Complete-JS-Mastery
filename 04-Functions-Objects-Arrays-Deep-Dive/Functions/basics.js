// 1. Function declaration
// 2. Anonymous function
// 3. Arrow function
// 4. IIFE function

// function declaration
// parameters
function sum(a, b) {
    return a + b;
}

// arguments
let res = sum(1, 2);
console.log(res);

// Anonymous function
const sum2 = function (a, b) {
    return a + b;
}
res = sum2(1, 2);
console.log(res);

// arrow function
const sumArrow = (a, b) => a + b;
res = sumArrow(1, 2);
console.log(res);

// by default a function return undefined
function test() {
    console.log("test function");
    return
    2;
}
console.log(test());
// function is a type in JavaScript
console.log(typeof test);