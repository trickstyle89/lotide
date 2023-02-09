/*

const [node, script, arrayA, arrayB] = process.argv;

function equalArray(arrayA ,arrayB) {
  if (arrayA.length !== arrayB.length || arrayA === null || arrayB === null) {
    return false;
  }
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
    return true;
  }
}

*/

const arrayB = {
  L: [ 0, 10 ],
  i: [ 1 ],
  g: [ 2 ],
  h: [ 3, 5 ],
  t: [ 4 ],
  o: [ 6, 18, 20 ],
  u: [ 7 ],
  s: [ 8, 13 ],
  e: [ 9, 15 ],
  a: [ 11 ],
  b: [ 12 ],
  H: [ 14 ],
  l: [ 16, 17, 22 ],
  W: [ 19 ],
  r: [ 21 ],
  d: [ 23 ],
  '!': [ 24 ]
};


const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
    
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
    console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};

  

const letterPositions = function(sentence) {
  const results = {};
  let cleanStr = sentence.split(' ').join('');
    
  for (let i = 0; i < cleanStr.length; i++) {
    if (results[cleanStr[i]]) {
      results[cleanStr[i]].push(i);
    } else {
      results[cleanStr[i]] = [i];
    }
  }
    
  return results;
};

console.log(letterPositions('Lighthouse Labs Hello World!'));
console.log(assertEqual(letterPositions('Lighthouse Labs Hello World!'), arrayB));
