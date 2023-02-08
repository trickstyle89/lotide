const [node, script, arrayA, arrayB] = process.argv;


function assertEqual(arrayA ,arrayB) {
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




const assertEqual = function(actual, expected) {
    const devilEmoji = "\uD83D\uDC7B";
    const angelEmoji = "\uD83D\uDE07";
  
    if (actual === expected) {
      console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
    }
    console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
  };
  
  assertEqual("Lighthouse Labs", "Bootcamp");