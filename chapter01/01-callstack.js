// 01-callstack.js

function first() {
    second();
    console.log('first');
}

function second() {
    third();
    console.log('second');
}

function third() {
    console.log('third');  // to be executed immediately
}

first();

// call stack / LIFO / push & pop
// function call: first() -> second() -> third()
// log message: third -> second -> first