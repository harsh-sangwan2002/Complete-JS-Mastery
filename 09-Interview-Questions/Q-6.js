let cap = {
    firstName: "Steve",
    sayHi: function () {
        console.log("Hi from ", this.firstName);
    }
}
cap.sayHi(); // Steve
let sayHiAdd = cap.sayHi;
var firstName = "Loki";
sayHiAdd(); // Loki