const score = 400

const balance = new Number(100)
console.log(balance); // [Number: 100]
console.log(score); // 400

console.log(balance.toString()); // string type
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // 100.00

// const otherNumber = 1123.8966 // 1.12e+3
const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)); // returns a string

const hundreds = 10000000
console.log(hundreds.toLocaleString()); // 10,000,000 // us
console.log(hundreds.toLocaleString('en-IN')); // 10,000,000 // en-in

// MAX-VALUE = range of the max value  // MAX-SAFE-INTEGER
// MIn-VALUE = range of the min value  // MIN-SAFE-INTEGER





// ++++++++++++++++++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++++++++++++++++


// library

console.log(Math); // Object [Math] {}
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3 , 6 , 8));
console.log(Math.max(4, 3 , 6 , 8));

console.log(Math.random()); // between 0 to 1
console.log(Math.random() * 10); // 0 to 10
console.log((Math.random() * 10) + 1); // 1 to 10
console.log(Math.floor(Math.random() * 10) + 1); // 1 to 10

const min = 10
const max = 20

Math.random() * (max - min + 1) // so that zero values wont come // 1 to 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // 10 to 20