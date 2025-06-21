var firstName = "Thanos";
let cap5 = {
    firstName: "Steve",
    sayHi: function () {
        console.log("109", this.firstName); // Steve
        // arrow ->  does not have it's own this. I am going to cheat it from outside 
        const subInner = () => {
            console.log("94", this.firstName); // Steve
            const iAmInner = function () {
                console.log("114", this.firstName); // Thanos

                const iAmSuperInner = () => {
                    console.log("117", this.firstName); // Thanos
                }
                iAmSuperInner();
            }
            iAmInner();
        }
        subInner();
    }
}
cap5.sayHi();