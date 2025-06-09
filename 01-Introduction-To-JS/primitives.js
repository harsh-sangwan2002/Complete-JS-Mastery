/********************** 1. Primitive types **********************/
// Variables can be declared using let, var and const

var x = 2;
console.log(typeof x); // number

x = "abc";
console.log(typeof x); // string

x = true;
console.log(typeof x); // boolean

x = undefined;
console.log(typeof x); //undefined

// This is a bug in JavaScript
x = null;
console.log(typeof x); // object

x = BigInt("12837687126387");
console.log(typeof x); // bigint

x = Symbol("1237653");
console.log(typeof x); // symbol 