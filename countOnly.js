const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
    console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};


function countOnly(names, options) {
  let results = {};
  for (const name of names) {
    if (options[name]) {
      if (results[name]) {
        results[name] += 1;
      } else {
        results[name] = 1;
      }
    }
  }
  return results;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
  
const countNames = {
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false
};
  
const countResults = countOnly(firstNames, countNames);
  
assertEqual(countResults["Jason"], 1);
assertEqual(countResults["Karima"], undefined);
assertEqual(countResults["Fang"], 2);
assertEqual(countResults["Agouhanna"], undefined);