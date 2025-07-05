// ES6 classes
class Animal {

    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} is speaking`);
    }
}

// Single Inheritance
class Dog extends Animal {

    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} is braking`);
    }
}

var labrador = new Dog('Rex', 'Labrador');
labrador.speak(); // Rex is speaking
labrador.bark(); // Rex is braking