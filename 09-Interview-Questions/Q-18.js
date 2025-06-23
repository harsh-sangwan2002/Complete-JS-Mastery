//  fn() == new fn() -> true
function fn() {
    // this is gonna override the return this value
    return fn;
}

console.log(fn());
console.log(new fn());
console.log(fn() == new fn()); // true