const [node, script, ...args] = process.argv;

if (args.length === 0) {
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

  readline.question('Enter a string to reverse: ', (string) => {
    reverse(string);
    readline.close();
  });
} else {
  reverse(args.join(' '));
}

function reverse(string) {
  let finalArray = [];
  let strArray = string.split('');

  for (let i = strArray.length - 1; i >= 0; i-- ) {
    finalArray.push(strArray[i]);
  }
  console.assert(finalArray.length === strArray.length, 'The length of the input string and the reversed string should be equal');
  console.log(finalArray.join(''));
};