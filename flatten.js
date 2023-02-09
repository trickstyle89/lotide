const [node, script, array] = process.argv;

let arraySample = [
  [1, 2],
  [3, 4],
  [5, 6],[7, 8, 9],
  [10, 11, 12, 13, 14, 15]
];

function flatten(arraySample) {
  let flatArray = [].concat(...arraySample);
  // let flatArray = [].concat.apply([], arraySample); another alternative
  //flat() works too!
  return flatArray;
}

console.log(flatten(arraySample));

/* below is supposely another method but did not work.
let flatArray = [].concat.apply([], arraySample);
let flatArray = [].concat(...arr);
flat()
*/