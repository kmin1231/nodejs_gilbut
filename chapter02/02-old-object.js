// 02-old-object.js

var sayNode = function() {
    console.log('Node');
};

var es = 'ES';

// create an object
var oldObject = {
    // define a method 'sayJS' -- anonymous function
    sayJS: function() {
        console.log('JS');
    },

    sayNode: sayNode,
};

// add a new dynamic property 'ES6'
// oldObject['ES6'] = 'Fantastic' -- cf. [Python] dictionary
oldObject[es + 6] = 'Fantastic';


// static property
oldObject.sayNode();            // Node
oldObject.sayJS();              // JS

// dynamic property
console.log(oldObject.ES6);     // Fantastic