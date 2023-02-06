const tail = function(array) {
  if (array.length === 0) {
    console.log(undefined);
  }
  let resultArray = array.slice(1);
  console.log(resultArray);
};
  
tail(['1', '2', '3', '4', '5']);