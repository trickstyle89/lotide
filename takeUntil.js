const takeUntil = function(array, callback) {
  const results = [];
  // interate through the entire array
  for (const item of array) {
    //once the callback is true! Then it stops hence the !.
    if (!callback(item)) {
      // if it is NOT equal it pushes that element onto array and the next one comes.
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};
    
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
    
console.log('---');
    
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


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
    


assertEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertEqual(takeUntil(data2, x => x === ','), [ "I've", 'been', 'to', 'Hollywood' ]);

/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


[ 1, 2, 5, 7, 2 ]
--
[ 'I\'ve', 'been', 'to', 'Hollywood' ]

*/