const [node, script, array] = process.argv;

const arrayLHL = ["hello", "world", "lighthouse"];

function assertEqual(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
    
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return (`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
    }
    return (`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  }
}

function without(arrayLHL, array) {
  return arrayLHL.filter(word => !array.includes(word));
}

console.log(without(arrayLHL, array));