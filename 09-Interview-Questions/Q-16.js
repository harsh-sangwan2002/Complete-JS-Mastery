function createEvenStack() {

    let items = [];

    this.push = function (item) {

        if (item % 2 == 0)
            items.push(item);

        else
            console.log("Please push an even number");

    }

    this.pop = function () {

        return items.pop();
    }

    this.printItems = function () {
        console.log(items);
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
console.log(stack.items);