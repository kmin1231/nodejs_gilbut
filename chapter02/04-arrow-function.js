// 04-arrow-function.js

// traditional function declaration with 'function' keyword
function add1(x, y) {
    return x + y;
}


// arrow function (with curly braces)
// (Atn.) since curly braces {} are used, explicitly requires the 'return' statement!

const add2 = (x, y) => {
    return x + y;
};

// without 'return' inside {} block, treated as a statement block (a block of executable code)
// the code inside {} will be executed, but its value will NOT be returned automatically
// ex. (X) const add2 = (x, y) = { x + y; };

// 'const' prevents a variable from being reassigned
// the function can still be called multiple times: add2(2, 3); add2(3, 4); ...


// arrow function -- implicit return
const add3 = (x, y) => x + y;
const add4 = (x, y) => (x + y);

// add1, add2, add3, add4: same functionality!


// traditional function declaration
function not1(x) {
    return !x;
}

// arrow function -- same functionality as 'not1'
const not2 = x => !x;