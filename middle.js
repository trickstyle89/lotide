const [node, script, arrayA] = process.argv;

const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
    console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};

assertEqual(middle(arrayA), [3, 4]); // enter the expected here.

function middle(arrayA) {
  if (arrayA.length % 2 !== 0) {
    let oddMiddle = Math.ceil(arrayA.length / 2);
    return [Number(oddMiddle)];
  }

  if (arrayA.length % 2 === 0) {
    let firstMiddle = Math.floor(arrayA.length / 2); //0123
    let secondMiddle = firstMiddle + 1;
  
    return [Number(firstMiddle), Number(secondMiddle)];
  }
}


console.log(middle(arrayA));