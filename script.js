//complete this code
class Animal {
	private:
    constructor(private _species: string) {}

    get species(): string {
        return this._species;
    }

    makeSound(): void {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat subclass extending Animal
class Cat extends Animal {
    constructor(species: string) {
        super(species);
    }

    purr(): void {
        console.log("purr");
    }
}

// Dog subclass extending Animal
class Animal {
    constructor(private _species: string) {}

    get species(): string {
        return this._species;
    }

    makeSound(): void {
        console.log(`The ${this._species} makes a sound`);
    }
}

// Cat subclass extending Animal
class Cat extends Animal {
    constructor(species: string) {
        super(species);
    }

    purr(): void {
        console.log("purr");
    }
}

// Dog subclass extending Animal
class Dog extends Animal {
    constructor(species: string) {
        super(species);
    }

    bark(): void {
        console.log("woof");
    }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
