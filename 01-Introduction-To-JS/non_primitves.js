/********************** 2. Non-primitive types **********************/
// array/object
console.log(arr);
var arr = [1, 2, 3, 4, 5, "123", true, null, undefined, Symbol("123")];
// console.log(typeof arr); // object
// console.log(arr instanceof Array); //true

// function 
// Functions are also called as first-class citizens as we can treat them as variables
// 1. function declaration
// console.log(test);
test();
function test() {
    console.log("This is a test function.");
}
test();

// console.log(show);
show();
// 2. function expression / anonymous function
var show = function () {
    console.log("I am a show function.");
}

console.log(arrowFn);
// 3. arrow function
var arrowFn = () => {
    console.log("I am an arrow function.");
}

// 4. IIFE - Immediately invoked function expression
// (function () {
//     console.log("I am an IIFE function.");
// })()