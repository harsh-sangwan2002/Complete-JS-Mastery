let cap3 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("53", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const iAmInner = () => {
            console.log("55", this.firstName); // Steve
        }
        iAmInner();
    }
}
cap3.sayHi();