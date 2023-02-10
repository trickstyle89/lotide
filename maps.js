const words = ["ground", "control", "to", "major", "tom"];
const results1 = word => word[0];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

console.log(map(words, results1));



const assertEqual = function(actual, expected) {
  //const devilEmoji = "\uD83D\uDC7B";
  //const angelEmoji = "\uD83D\uDE07";
    
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
};
  

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let value = 0; value < array1.length; value += 1) {
    if ((Array.isArray(array1[value]) || Array.isArray(array2[value])) && eqArrays(array1[value], array2[value]) === false) {
      return false;
    } else if (Array.isArray(array1[value]) || Array.isArray(array2[value])) {
      eqArrays(array1[value], array2[value]);
    } else if (array1[value] !== array2[value]) {
      return false;
    }
  }
  return true;
};

assertEqual(map(words, results1), [ 'g', 'c', 't', 'm', 't' ]);
