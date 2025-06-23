function createEvenStack() {

    let items = [];

    this.push = function (item) {
        if (item % 2 === 0) {
            items.push(item);
        } else {
            console.log("Only even numbers are allowed");
        }
    }

    this.pop = function () {
        return items.pop();
    }

    this.printItems = function () {
        console.log("Items in stack: ", items);
    }
}

const stack = new createEvenStack();
stack.push(1);
stack.push(2);
stack.printItems();

stack.push(3);
stack.push(4);
stack.printItems();

// prevent this behaviour
// stack.items = [100, 200, 300];