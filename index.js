// 1 + 80; //=> 81
// 60 - 40; //=> 20
// 2 * 3.4; //=> 6.8
// 5.0 / 2.5; //=> 2

// Basic math functions
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
      return NaN;  // Handle division by zero
    }
    return a / b;
  }
  
  function increment(n) {
    return n + 1;
  }
  
  function decrement(n) {
    return n - 1;
  }
  
  // Make integer function
  function makeInt(n) {
    return parseInt(n, 10);  // Assumes base 10
  }
  
  // Preserve decimal function
  function preserveDecimal(n) {
    return parseFloat(n);  // Ensures the number is a floating point
  }