// 07-object-destructuring.js

// declare 'candyMachine' using 'const'
const candyMachine = {
    status: {
      name: 'node',
      count: 5,
    },

    // shrothand method without 'function' keyword
    // a method to decrease 'count' -> return the updated 'count'
    getCandy() {
      this.status.count--;
      return this.status.count;
    },
};

// [destructuring assignment] extract values from 'candyMachine'
const { getCandy, status: { count } } = candyMachine;

console.log('by calling getCandy(), updated count:', candyMachine.getCandy());  // 4

// extracted value using destructuring assignment (shallow copy)
console.log('destructured value:', count);  // 5 (at the time of assignment)

console.log('current value in candyMachine:', candyMachine.status.count);  // 4 (current value -- updated)