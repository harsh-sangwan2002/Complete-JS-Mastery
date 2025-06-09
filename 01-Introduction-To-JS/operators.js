/************************ Operators in JS ************************/

// 1. Arithmetic Operators
var x = 2;
console.log(x + 2); // add with 2
console.log(x - 2); // subtract 2 from x
console.log(x * 2); // multiply by 2
console.log(x / 2); // divide by 2
console.log(x ** 2); // raise to the power of 2
console.log(x % 2); // remainder

// 2. Logical operators
var x = true, y = false;
console.log(x || y); // true or true
console.log(x && y); // true and true
console.log(!x); // !true

// 3. Bitwise operators
var x = 2, y = 3;
// 10
// 11
console.log(x | y); // 10 | 11 -> 11
console.log(x & y); // 10 & 11 -> 10
console.log(x << 1); // 280's 100 -> 4
console.log(x >> 1); // 01
console.log(~x); // 01