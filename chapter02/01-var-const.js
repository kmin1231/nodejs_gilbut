// 01-var-const.js

if (true) {
    var x = 3;  // var: FUNCTION-scoped
}
console.log(x);
// 'var' is declared inside 'if' block, but NOT inside a function
// hoisted to the global scope -> successfully prints the value of 'x'
 
if (true) {
    const y = 3;  // const: BLOCK-scoped
}
console.log(y);
// once 'if' block ends, 'y' is no longer accessible
// Uncaught ReferenceError: y is not defined