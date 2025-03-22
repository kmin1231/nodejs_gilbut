// 15-promise-with-callback.js

function findAndSaveUser(Users) {
    // [first promise] finds the first user from 'Users'
    Users.findOne({})
      .then((user) => {
        user.name = 'zero';
        return user.save();  // returns the saved user as a Promise
      })
      .then((user) => {
        return Users.findOne({ gender: 'm' });  // finds a user with gender 'm'
      })
      .then((user) => {

        // additional work can be done here...
        
      })
      .catch(err => {
        console.error(err);  // if an error occurs, log it to the console
      });
  }


/*
  [14-callback-hell.js]
  - multiple nested callbacks make the code difficult to read, maintain, and debug
  - each function runs asynchronously -> error-handling logic is also nested -> difficult to trace

  [15-promise-with-callback.js]
  >> READABILITY
  - allows you to list asynchronous tasks sequentially using .then()
    -> makes the flow of the code more visible and understandable

  >> ERROR HANDLING
  -  catch() block at the end handles errors for the entire chain
    -> simplifies error handling & makes it consistent across the code
    => makes the code easier to maintain & improves debugging
*/