public class Dog extends Animal {

    public String breed;

    public Dog(String name, String breed) {
        super(name);
        this.breed = breed;
    }

    @Override
    public String toString() {
        return "Dog{" + "name='" + super.name + '\'' + '}';
    }

    public static void main(String[] args) {
        Dog dog = new Dog("Buddy", "Labrador");
        System.out.println(dog.name);
        System.out.println(dog.breed);
        dog.speak();
    }
}
