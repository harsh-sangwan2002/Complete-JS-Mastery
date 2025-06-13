let str = "Harsh";
// It is immutable, it will create a new string at a new memory location.
str += "123"
console.log(str);

// toUpperCase();
console.log(str.toUpperCase());

// toLowerCase();
console.log(str.toLowerCase());

// substring -> startIndex, endIdx-1
console.log(str.substring(1, 3));

// startsWith
console.log(str.startsWith("Har")); // true

// endsWith
console.log(str.endsWith("123")); // true
console.log(str.endsWith("sh")); // false

// indexOf
console.log(str.indexOf("ar"));

let str2 = new String(123);
console.log(typeof str2); // object

let str3 = String(123);
console.log(typeof str3); // string