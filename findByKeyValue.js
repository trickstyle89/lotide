/*
const assertEqual = function(actual, expected) {
  const devilEmoji = "\uD83D\uDC7B";
  const angelEmoji = "\uD83D\uDE07";
    
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    return console.log(`${angelEmoji} Assertion Passed: ${actual} === ${expected} ${angelEmoji}`);
  } else
    return console.log(`${devilEmoji} Assertion Failed: ${actual} !== ${expected} ${devilEmoji}`);

};
*/

// for Of loop
const findKeyByValue = function(bestTVShowsByGenre, value) {
  const genres = Object.keys(bestTVShowsByGenre);
  for (const genreShow of genres) {
    if (bestTVShowsByGenre[genreShow] === value) {
      return genreShow;
    }
  }
  return undefined;
};

/* Iterative Method with C loop
function findKeyByValue(bestTVShowsByGenre, value) {
  const genres = Object.keys(bestTVShowsByGenre);
  for (let i = 0; i < genres.length; i++) {
    const genre = genres[i];
    if (bestTVShowsByGenre[genre] === value) {
      return genre;
    }
  }
  return undefined;
}
*/

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));


/* 
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
*/