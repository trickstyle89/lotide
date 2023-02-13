const assertEqual = function(actual, expected) {

  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;