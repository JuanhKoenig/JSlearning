// Variables declared with let have Block Scope

// Variables declared with let must be Declared before use

// Variables declared with let cannot be Redeclared in the same scope


// Variables declared inside a { } block cannot be accessed from outside the block:



if (true) {
    let x = "testing";
}


function testing(x) {

    console.log(x) // X can't be accessed from outside the block, since a variable declared with "let" has block scope.

}

// testing(x);


// Variables defined with let can not be redeclared.

// You can not accidentally redeclare a variable declared with let.

function testing2 (x) {
    
    let x = "first value";

    let x = "second value";

    // a variable declared with "let" can't be re-declared.

}

let testVariable = 1;

// testing2(testVariable);