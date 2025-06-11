// Closure : A function bundled with its lexical envirnoment
function test() {
    var x = 10;
    function test2() {
        var y = 100;
        function test3() {
            var z = 1000;
            console.log(x, y, z);
        }
        test3();
    }
    test2();
}

test();