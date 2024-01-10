// Variables declared with the var always have Global Scope.

// Variables declared with the var keyword can NOT have block scope:


{
    var x = "testing";
}

console.log(x); //x can be accessed here since a variable declared with "var" has global scope.


// variables declared with "var" can be re-declared:

var x = "testing if this can be changed"; // it can

console.log(x);

// Redeclaring a variable using the var keyword can impose problems.

// Redeclaring a variable inside a block will also redeclare the variable outside the block:

var x = 10;
// Here x is 10

{
var x = 2;
// Here x is 2
}

// Here x is 2

// var is hoisted: 

console.log(testingHoisting);

var testingHoisting = "this will display 'undefined' in the console";
