'use strict'
// {}
// console.log(this);

function test() {
    // undefined
    // console.log(this);
    function test2() {
        // undefined
        // console.log(this);
    }
    test2();

    const arrowFn = () => {
        // undefined
        console.log(this);
    }
    arrowFn();
}
// test();

let obj = {
    name: "John",
    test: function () {
        // refers to the same object
        // console.log(this);
        const inner = () => {
            // refers to the same object
            // console.log(this);
        }
        inner();
    },
    test2: () => {
        // refers to the {}
        console.log(this);
    }
}
// obj.test();
obj.test2();