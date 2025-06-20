function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function () {
    console.log(this.name + " speaks!");
}

function Dog(name, breed) {
    Animal.call(this, name);
    this.breed = breed;
}

// Prototype inheritance
Dog.prototype.__proto__ = Animal.prototype;

var labrador = new Dog("Rocky", "Labrador");
console.log(labrador.name);
labrador.speak();