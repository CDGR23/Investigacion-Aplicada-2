// calculator.js

function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero");
    }
    return a / b;
  }
  
  async function asyncMultiply(a, b) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(a * b), 500);
    });
  }
  
  module.exports = { add, subtract, multiply, divide, asyncMultiply };
  