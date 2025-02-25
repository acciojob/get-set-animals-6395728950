//complete this code
 
	 

class Animal {
    private _species: string;
    
    constructor(species: string) {
        this._species = species;
    }

    get species(): string {
        return this._species;
    }

    makeSound(): void {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat subclass extending Animal
class Cat extends Animal {
    constructor() {
        super("Cat"); // Automatically set species to "Cat"
    }

    purr(): void {
        console.log("purr");
    }

    makeSound(): void {
        this.purr(); // Override to use the specific sound
    }
}

// Dog subclass extending Animal
class Dog extends Animal {
    constructor() {
        super("Dog"); // Automatically set species to "Dog"
    }

    bark(): void {
        console.log("woof");
    }

    makeSound(): void {
        this.bark(); // Override to use the specific sound
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
