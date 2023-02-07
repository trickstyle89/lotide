const [node, script, arrayA, arrayB] = process.argv;


function assertEqual(arrayA , arrayB){
    if (arrayA.length !== arrayB.length || arrayA == null || arrayB == null) {
        return false;
    }
for (i = 0; i < arrayA.length; i++) {    
    if (arrayA[i] !== arrayB[i]) {
        return false;
}
return true;
}
}

console.log(assertEqual(arrayA, arrayB));