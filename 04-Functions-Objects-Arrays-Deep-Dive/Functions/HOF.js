function show() {
    console.log("I am show.");
}

// Function can be passed as an argument inside another function
function fn(cb) {
    console.log("I am fn & I am going to call callBack function.");
    cb();
}

fn(show);

// Return a function from another function
function sum() {

    let count = 0;
    count++;

    return function () {
        return count;
    }
}

let res = sum();
console.log(res());