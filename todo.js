// Declare a variable with var
var x = 1;
{
  // Declare another variable with var
  var x = 2;
  console.log(x); // Output: 2
}
console.log(x); // Output: 2

// Declare a variable with let
let y = 1;
{
  // Declare another variable with let
  let y = 2;
  console.log(y); // Output: 2
}
console.log(y); // Output: 1

// Declare a variable with const
const z = 1;
{
  // This will throw an error because you can't reassign a const variable
  const z = 2;
}
console.log(z); // Output: 1