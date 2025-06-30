class Person {

    static population = 0;
    #privateField = 'This is private';

    constructor(name, age) {
        this.name = name;
        this.age = age;
        Person.population++;
        console.log(this.#privateField); // Accessing private field
    }

    static getPopulation() {
        return Person.population;
    }

    static resetPopulation() {
        Person.population = 0;
    }

    display() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

var p1 = new Person('John', 30);
var p2 = new Person('Jane', 25);
console.log(Person.getPopulation());