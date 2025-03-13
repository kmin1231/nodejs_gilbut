// 03-new-object.js
// [oldObject] ES5 -> [newObject] ES6+ syntax

var sayNode = function() {
    console.log('Node');
};

var es = 'ES';

// create an object
var newObject = {
    // define a method more concisely without the 'function' keyword
    sayJS() {
        console.log('JS');
    },

    // if. property name = variable name
    // use shorthand and omit the property name on the left side
    sayNode,

    // ES6 allows the use of dynamic keys in object literals
    // the property name is computed at runtime
    // can directly add dynamic properties while creating the object
    [es + 6]: 'Fantastic',
};


// static property
newObject.sayNode();            // Node
newObject.sayJS();              // JS

// dynamic property
console.log(newObject.ES6);     // Fantastic