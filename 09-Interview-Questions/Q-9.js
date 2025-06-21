var firstName = "Thanos";
let cap4 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("91", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName); // Steve
            const iAmInner = () => {
                console.log("95", this.firstName); // Steve
            }
            iAmInner();
        }
        subInner();
    }
}
cap4.sayHi();