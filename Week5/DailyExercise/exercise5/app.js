const _ = require('lodash');
const math = require('./math');

const numbers = [1, 2, 3, 4];

console.log("Sum:", math.add(5, 3));
console.log("Multiply:", math.multiply(4, 2));

// lodash example
console.log("Max number:", _.max(numbers));
