// Three keywords to declare variables in JavaScript: let, var, and const
// var is function-scoped
// let and const are block-scoped
function test() {

    if (true) {
        // Area above the declaration on let/const variable
        // TDZ (Temporal dead zone)
        console.log(x);
        var x = 12;
        let y = 120;
        console.log(y);
    }
    console.log(x); // This can be accessed
    // console.log(y); // ReferenceError
}

test();