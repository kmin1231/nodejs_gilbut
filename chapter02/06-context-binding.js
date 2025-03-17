// 06-context-binding.js

// declare an object 'candyMachine'
var candyMachine = {
    status: {
      name: 'node',
      count: 5,
    },

    // a method to decrease 'count' -> return the updated 'count'
    getCandy: function () {
      this.status.count--;  // decrement
      return this.status.count;
    },
};

console.log('initial count in candyMachine:', candyMachine.status.count);  // 5

var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

console.log('count after assignment:', count);  // still '5'
console.log();


// console.log(getCandy());  // ERROR
// calling 'getCandy()' results in 'this' being 'undefined' -- NOT referring to 'candyMachine' 


// BIND 'getCandy' to the correct context (candyMachine)
var boundGetCandy = getCandy.bind(candyMachine);

// Call the bound 'getCandy' method -> correctly update and print 'count'
console.log('calling bound getCandy method...');
console.log('-> result of calling boundGetCandy()', boundGetCandy());  // 4

// final 'count' in candyMachine
console.log('count variable remains unchanged:', candyMachine.status.count);  // 4
console.log();

console.log(`'count' remains`, count);  // still '5' -- shallow copy of initial value
// NOT reflect updates to `candyMachine.status.count`