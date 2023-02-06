const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";

  if (actual === expected) {
    console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  }
  console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);
};

assertEqual("Lighthouse Labs", "Bootcamp");
