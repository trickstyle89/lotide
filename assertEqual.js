const assertEqual = function(actual, expected) {
  //const devilEmoji = "\uD83D\uDC7B";
  //const angelEmoji = "\uD83D\uDE07";
  
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✅  Assertion passed: ${actual} === ${expected}`);
  } else
    console.log(`🛑  Assertion failed: ${actual} !== ${expected}`);
};
