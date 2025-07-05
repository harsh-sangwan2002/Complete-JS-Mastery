class A {

    constructor() {
        console.log("A's constructor");
    }

    print() {
        console.log("A's print");
    }
}

class B extends A {

    constructor() {
        super();
        console.log("B's constructor");
    }

    print() {
        console.log("B's print");
    }
}

class C extends B {

    constructor() {
        super();
        console.log("C's constructor");
    }

    print() {
        console.log("C's print");
    }
}

var c = new C();
c.print();