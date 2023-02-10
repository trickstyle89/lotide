const assertEqual = function(actual, expected) {
  //const devilEmoji = "\uD83D\uDC7B";
  //const angelEmoji = "\uD83D\uDE07";
    
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
};

const findKey = function(object, callBack) {
  let results = [];
  const michelin = Object.entries(object);
  for (const [key, values] of michelin) {
    if (callBack(values)) {
      results.push(key);
    }
  }
  return results;
};
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, name => name.stars === 2)); // => "noma"

result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, name => name.stars === 2);

console.log(assertEqual(result, [ 'noma', 'Ora' ]));