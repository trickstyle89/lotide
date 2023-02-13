
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


module.exports = middle;