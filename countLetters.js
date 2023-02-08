// count every letter of a string.
const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
  console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};
  

function countLetters(str) {

  const lowerCaseStr = str.toLowerCase();
  const result = {};

  for (let letter of lowerCaseStr) {
    
    if (!result[letter]) {
      result[letter] = 1;
    } else {
      result[letter]++;
    }
  }
  return result;
}

console.log(countLetters('This is a test'));

console.log(assertEqual(countLetters('This is a test'), { t: 3, h: 1, i: 2, s: 3, ' ': 3, a: 1, e: 1 }));