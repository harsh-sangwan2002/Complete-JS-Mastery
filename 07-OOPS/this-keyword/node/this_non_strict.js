/* Whenever the script is being executed inside Node.js it wraps the whole script inside
// an IIFE function (function(param1,param2,..){ 
    })()
*/
// {}
// console.log(this);

function test() {
    // gloabl object
    // console.log(this);
    function test2() {
        // global object
        // console.log(this);
    }
    test2();

    const arrowFn = () => {
        // global object
        // console.log(this);
    }
    arrowFn();
}
test();

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
        // refers to the {}
        console.log(this);
    }
}
obj.test();
// obj.test2();