const tail = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  let resultArray = array.slice(1);
  return resultArray;
};
  
module.exports = tail;
