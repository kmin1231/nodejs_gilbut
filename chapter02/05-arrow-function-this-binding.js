// 05-arrow-function-this-binding.js
// Note: how 'this' behaves in two cases


// [case1] regular function
var relationship1 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],
    logFriends: function () {
        // 'this' inside the 'forEach' callback points to the global object, NOT the 'relationship1' object
        // in order to ensure the correct 'this' is used,
        // defines a variable 'that' to store the correct value of 'this' (relationship1) before 'forEach' loop
        var that = this;

        // inside 'forEach' loop, access the correct name property using 'that.name'
        this.friends.forEach(function (friend) {
            console.log(that.name, friend);
        });
    },
};

console.log('[case#1]');
relationship1.logFriends();
console.log();

// [case2] arrow function
const relationship2 = {
    name: 'zero',
    friends: ['nero', 'hero', 'xero'],

    // arrow functions do NOT have their own 'this'
    // capture 'this' value from their surrounding context (the function in which they are defined)
    // inside the arrow function, 'this.name' still refers to the name property of relationship2 
    logFriends() {
        this.friends.forEach(friend => {
            console.log(this.name, friend);
        });
    },
};

console.log('[case#2]');
relationship2.logFriends();

// 'relationship1' uses a REGULAR function -- binds 'this' manually with 'that'
// 'relationship2' uses an ARROW function -- automatically binds 'this' from the outer scope