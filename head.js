const head = function(...array) {
    if (array.length <= 1) {
        console.log(undefined);
        
    } 
    console.log((array[0][0]).toString());
};
  
head([1, 2, 3, 4, 5]);