// Type coercion - Converting a value from one type to another
// number -> string
// string -> number
// 1. Implicit coercion
console.log(2 + " is a number");

// 2. Explicit coercion
let x = "10";
console.log(typeof x);
x = parseInt(x);
console.log(typeof x);