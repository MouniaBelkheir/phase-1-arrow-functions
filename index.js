// index.js

// Function expression called "divide" that divides two numbers
function divide(a, b) {
    return a / b;
  }
  
  // Arrow function called "square" that takes one parameter and multiplies it by itself
  const square = (x) => {
    return x * x;
  };
  
  // Arrow function called "add" that takes two parameters and adds them together
  const add = (a, b) => {
    return a + b;
  };
  
  // Export the functions so they can be used in other files if needed
  module.exports = {
    divide,
    square,
    add,
  };
  