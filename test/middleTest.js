const middle = require('../middle');
const assertEqual = require('./assertEqualTest');

console.log(assertEqual(middle([1, 2, 3]), 2));
console.log(assertEqual(middle([6, 7, 8]), 7));
console.log(assertEqual(middle([1 , 2 , 3, 4]), [2, 3]));
console.log(assertEqual(middle([9, 10, 11, 12]), [10, 11]));

module.exports = middle;