// 1. TDZ -> Temporal Dead Zone
// 2. It is hoisted inside the script scope.
let x = 10;
console.log(x);

// 3. Cannot be re-declaraed
// let x = 20;