var compar = require('./Comparer');
var calc = require('./Calculator')

var result = (compar.AreNumberEqual(5, 5) ? calc.Add(n1, n2) : calc.Subtract(n1, n2));

console.log(result);