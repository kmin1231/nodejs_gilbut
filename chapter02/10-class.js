// 10-class.js

class Human {
    // constructor -- initialize 'type' property
    constructor(type = 'human') {
        // 'human' by default
        this.type = type;
    }

    // static method -- called directly on the class
    static isHuman(human) {
        return human instanceof Human;
    }

    // prototype method
    breathe() {
        // alert('h-a-a-a-m');
        console.log('h-a-a-a-m');
    }
}


// 'Zero' class extends 'Human' class
// 'Zero' inherits ALL properties and methods from 'Human'
class Zero extends Human {
    constructor(type, firstName, lastName) {
        // calls 'Human' constructor, passing 'type' to inherit 'type' property
        super(type);

        // store specific name values for 'Zero' instance
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // called by instances of 'Zero'
    sayName() {
        super.breathe();
        // alert(`${this.firstName} ${this.lastName}`);
        console.log(`${this.firstName} ${this.lastName}`);
    }
}


// create a 'Zero' instance
const newZero = new Zero('human', 'Zero', 'Cho');

newZero.breathe();
console.log();

newZero.sayName();
console.log();

console.log(Human.isHuman(newZero));  // true


// changed from 'alert' to 'console.log' for testing in the terminal