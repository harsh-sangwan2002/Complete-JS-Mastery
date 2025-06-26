// 1. TDZ -> Temporal Dead Zone
// 2. It is hoisted inside the script scope.
const x = 10;
console.log(x);

// 3. Cannot be re-declared
// const x = 20;

// 4. Cannot be re-assigned
x = 20;
console.log(x);