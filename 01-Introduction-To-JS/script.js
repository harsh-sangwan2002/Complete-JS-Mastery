// JS is a dynamically typed language used for web development - adding interactivity and dynamic behaviour to websites
// Variables can be decalred using three keywords - let, var and const

// #################### Primivive Types ####################
// 1. number
var x = 12;
console.log(x);
console.log(typeof x);

// 2. string
x = "a";
console.log(x);
console.log(typeof x);

// 3. boolean
x = true;
console.log(x);
console.log(typeof x);

// 4. undefined
let y;
console.log(y);
console.log(typeof y);

// 5. null - it's a bug in JS
x = null;
console.log(x);
console.log(typeof x);

// 6. bigint
x = 1236576523467n;
x = BigInt('1237657625323');
console.log(x);
console.log(typeof x);

// 7. symbol
x = Symbol("123");
console.log(x);
console.log(typeof x);

// JS is JIT compiled language which means that the compiled code will be executed as soon as it is compiled