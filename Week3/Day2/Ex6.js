const a = [2];
const b = [2];
console.log(a === b); // false

const c = {};
const d = {};
console.log(c === d); // false

console.log(object2.number) // 4
console.log(object3.number) // 4
console.log(object4.number) // 5

class Animal {
    constructor(name, type, color) {
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }

    sound(noise) {
        return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
    }
}

const farmerCow = new Mammal('Lily', 'cow', 'brown and white');
console.log(farmerCow.sound('Moooo'));
// Moooo I'm a cow, named Lily and I'm brown and white