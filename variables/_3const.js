// a const variable cannot be re-assigned

function testingConst(pi) {
    const pi = "3.14"

    const pi = "3.1415" //this will give an error
}

// testingConst(self)

// const variables must be assigned a value when they are declared:

function wrongWay(x) {
    // const x;

    // x = 19;
}

function correctWay(x) {
    const x = 19;
}

// Always declare a variable with const when you know that the value should not be changed.

// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp


// The keyword const is a little misleading.

// It does not define a constant value. It defines a constant reference to a value.

// Because of this you can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object
// But you CAN:

// Change the elements of constant array
// Change the properties of constant object


// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];

// You can change an element:
cars[0] = "Toyota";

// You can add an element:
cars.push("Audi");


// But you can NOT reassign the array:


function thisWontWork(cars) {
    const cars = ["Saab", "Volvo", "BMW"];

    cars = ["Toyota", "Volvo", "Audi"];    // ERROR

}


// You can create a const object:
const car = {type:"Fiat", model:"500", color:"white"};

// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Johnson";


// But you can NOT reassign the object:

function thisWontWork2 (car) {

    const car = {type:"Fiat", model:"500", color:"white"};

    car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

}

//  I've been using functions to keep the code out of errors but

//  functions have their own scope called "function scope"

//  var, let, and const have function scope

