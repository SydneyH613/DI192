// Base class
class Animal {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public makeSound(): string {
    return "Some generic animal sound";
  }
}

// Subclass that extends Animal
class Dog extends Animal {
  constructor(name: string) {
    super(name); // Call the base class constructor
  }

  // Override the makeSound method
  public makeSound(): string {
    return "Bark";
  }
}

// Example usage
const myDog = new Dog("Buddy");
console.log(myDog.name);        // Buddy
console.log(myDog.makeSound()); // Bark
