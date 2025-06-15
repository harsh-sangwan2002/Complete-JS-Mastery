// window
// console.log(this);

'use strict';
function test() {
    // undefined in strict mode
    // window in non-strict mode
    console.log(this);
    function inner() {
        console.log(this);
    }
    inner();
}
test();

let obj = {
    name: "John",
    age: 30,
    greet: function () {
        // obj
        console.log(this);
        function test() {
            // window
            console.log(this);
        }
        test();
    },
    // arrow function don't have their own 'this'
    // they use 'this' from the parent scope
    arrowFn: () => {
        // window
        console.log(this);
        const inner = () => {
            // window
            console.log(this);
        }
        inner();
    }
}

// this will be replaced with the current calling object
// obj.greet();
// obj.arrowFn();