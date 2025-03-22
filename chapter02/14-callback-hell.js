// 14-callback-hell.js
// nested callback functions

function findAndSaveUser(Users) {
    // searches the database for a user
    Users.findOne({}, (err, user) => {  // fist callback
      if (err) {
        return console.error(err);
      }

      user.name = 'zero';  // changes the user's name

      // saves the modified user object back to the database
      user.save((err) => {  // second callback
        if (err) {
          return console.error(err);
        }

        // searches for a user with a gender of 'm'
        Users.findOne({ gender: 'm' }, (err, user) => {  // third callback
        });
      });
    });
}