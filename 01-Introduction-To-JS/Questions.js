// == -> loose comparison
// === -> strict comparison
console.log(2 == "2"); // true -> type coercion
console.log(2 === "2"); // false -> strict comparison check the types and then the values

console.log(null == undefined); // true
console.log(null === undefined); // false

let x = 2 + undefined;
console.log(x); // NaN -> Not a number
console.log(typeof NaN); // number
console.log(NaN == NaN); // true? -> false

let y = 2 - undefined;
console.log(y);