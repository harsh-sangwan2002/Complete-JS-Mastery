// window
// console.log(this);

function test() {
    // window
    console.log(this);
    function test2() {
        // window
        console.log(this);
    }
    test2();

    const arrowFn = () => {
        // window
        console.log(this);
    }
    arrowFn();
}
// test();

let obj = {
    name: "John",
    test: function () {
        // refers to the same object
        console.log(this);
        const inner = () => {
            // refers to the same object
            console.log(this);
        }
        inner();
    },
    test2: () => {
        // window
        console.log(this);
    }
}
// obj.test();
obj.test2();