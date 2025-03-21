// 13-promise-chaining.js
// promise chaining example

const condition = true;
// const condition = false;

const promise = new Promise((resolve, reject) => {
  if (condition) {
    resolve('Success');
  } else {
    reject('Failure');
  }
});


promise
.then((message) => {
    // [if 'true'] executes this block
    // [if 'false] skip this block -> 'catch' block runs
    // creates a new 'Promise' -> resolves it with the same 'message'
    return new Promise((resolve, reject) => {
        resolve(message);  // passes 'message' to the next .then()
    });
  })
  .then((message2) => {
    // this block runs only if condition = true -> logs the received message
    console.log(message2);  // prints 'Success' if condition = true

    // creates a new 'Promise' -> resolves it with the same message
    return new Promise((resolve, reject) => {
        resolve(message2);  // passes 'message2' to the next .then()
    });
  })
  .then((message3) => {
    // this block runs only if condition = true
    console.log(message3);  // prints 'Success' if condition = true
  })
  .catch((error) => {
    // this block runs only if condition = false
    console.error(error);  // prints 'Failure' if condition = false
});


/*
    [case1] const condition = true;
    - (log) Sucess -> Success

    [case2] const condition = false;
    - (log) Failure
*/