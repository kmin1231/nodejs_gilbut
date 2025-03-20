// 11-promise.js
// asynchronous operation example


//  (if true) resolve; (if false) reject

const condition = true;
// const condition = false;


/*
    'Promise' is an object used for handling asynchronous operations
    - handles the EVENTUAL result of an asynchronous operation
    - possible states: pending, resolved, rejected 
*/

const promise = new Promise((resolve, reject) => {
    // resolve(value); reject(reason)
    if (condition) {
        resolve('Sucess');  // true
    } else {
        reject('Failure');  // false
    }
});


// promise - then - catch - finally
// structure of taking callback functions as arguments
promise
.then((message) => {
    console.log(message);  // executes if promise is resolved (success)
    })
    .catch((error) => {
        console.error(error);  // executes if promise is rejected (failure)
    })
    .finally(() => {
        // ALWAYS executes -- regardless of success or failure
        console.log('Always');
    });


/*
    [case1] const condition = true;
    - (log) Sucess -> Always

    [case2] const condition = false;
    - (log) Failure -> Always
*/