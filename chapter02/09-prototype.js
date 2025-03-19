// 09-prototype.js

// constructor function 'Human'
var Human = function(type) {
    // (if no 'type' is provided) 'human' by default
    this.type = type || 'human';
};

// static method
Human.isHuman = function(human) {
    // check if the given object is an instance of 'Human'
    return human instanceof Human;
}

// prototype method 'breathe' -> available to all 'Human' instances
Human.prototype.breathe = function() {
    alert('h-a-a-a-m');
};


// constructor function 'Zero'
var Zero = function(type, firstName, lastName) {
    // 'Zero' extends 'Human' -> 'Zero' instances inherit the 'type' property
    Human.apply(this, arguments);

    // additional properties of 'Zero' instances
    this.firstName = firstName;
    this.lastName = lastName;
};

// prototype inheritance
Zero.prototype = Object.create(Human.prototype);
Zero.prototype.constructor = Zero;


// add 'sayName' method to 'Zero' -> display full name
Zero.prototype.sayName = function() {
    // alert(this.firstName + ' ' + this.lastName);
    console.log(this.firstName + ' ' + this.lastName);
};

// create a 'Zero' instance
var oldZero = new Zero('human', 'Zero', 'Cho');
oldZero.sayName();  // 'Zero Cho'
console.log(Human.isHuman(oldZero));  // 'oldZero' is an instance of 'Zero', which inherits from 'Human' (true)