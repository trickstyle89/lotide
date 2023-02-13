const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});


/*
const assertEqual = require('./assertEqualTest');
const head = require('../head');

console.log(assertEqual(head([1, 2, 3]), 1));
console.log(assertEqual(head(['6']), '5')); 
console.log(assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'));
console.log(assertEqual(head(['Apple']), 'Apple'));
console.log(assertEqual(head([9]), 9));
console.log(assertEqual(head([]), 'Goodbye');
*/
