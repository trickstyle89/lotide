const args = process.argv.slice(2).map(Number).reduce((a, b)=> a + b);
console.log(args);