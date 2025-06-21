let cap2 = {
    firstName: "Steve",
    sayHi: function (param) {
        console.log("52", this.firstName); // Steve
        const iAmInner = function (param) {
            console.log("54", this.firstName); // Loki
        }
        // EC by this kind of call -> window
        iAmInner(20);
    }
}

// EC by this -> cap
cap2.sayHi(10);