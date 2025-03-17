// 08-array-destructuring.js

// Array Indexing (non-destructuring assignment)
// var array = ['nodejs', {}, 10, true];

// var node = array[0];
// var obj = array[1];
// var bool = array[3];


// Array Destructuring Assignment
const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;

console.log('node:', node);  // 'nodejs'
console.log('obj:', obj);    // {}
console.log('bool:', bool);  // true
console.log();

// third element of 'array' is NOT assigned to variable -- ignored during destructuring
console.log('array[2]:', array[2]);  // 10