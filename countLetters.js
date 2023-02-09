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