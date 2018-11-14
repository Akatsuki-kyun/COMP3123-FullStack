
var calc = require('./calculator');

console.log(calc.addTwoNumbers("a", "b")); // will be ab, we need a check for integers!

console.log(calc.addTwoNumbers(2, 2)); // should equal 4

// ** unit test should be placed in a separate test file ie. test.js 
// ** command line > mocha test.js to run unit tests


