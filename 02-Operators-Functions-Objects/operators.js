// Falsy values in JS -> '', false, 0, null, undefined, NaN
// Everything else is truthy

// 1. == Vs ===
console.log("2" == 2); // true
console.log("2" === 2); // false

// 2. Logical Operators
console.log(2 || 3 || ''); // 2
console.log('' || null); // null

console.log(2 && 3 && ''); // ''
console.log(null && undefined && 'hello'); // null

// 3. Ternary Operator
let age = 18;
let isAdult = age >= 18 ? 'Yes' : 'No';
console.log(isAdult);

// 4. Nullish Coalescing Operator
let a = null;
let b = 10;
let result = a ?? b;
console.log(result);

// 5. Optional Chaining Operator
let user = {
    name: 'John',
}
console.log(user?.name);