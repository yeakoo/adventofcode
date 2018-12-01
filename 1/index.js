const fs = require('fs');

const array = fs.readFileSync('input.txt').toString().split("\n").map(n => parseInt(n)).reduce((acc, value) => acc + value, 0);

console.log(array);