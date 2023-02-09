const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
    
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
    console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};
  
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
  
const itemsToCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };
  
const result1 = countOnly(firstNames, itemsToCount);
  
const actual = result1["Jason"];
const expected = 1;
assertEqual(actual, expected);