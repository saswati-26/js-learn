let score = 33
console.log(typeof score);
console.log(typeof (score));

let scores = "33ap"
console.log(typeof scores);
console.log(typeof (scores));

let valueInNumber = Number(scores)
console.log(typeof valueInNumber);
console.log(valueInNumber); // NaN- Not a Number //no strict check ex here
// strings cannot be converted to number

let scoress = null
let valueInNumberOfScoress = Number(scoress)
console.log(typeof valueInNumberOfScoress);
console.log(valueInNumberOfScoress);

let mark = undefined
let valueInNumberOfMark = Number(mark)
console.log(typeof valueInNumberOfMark);
console.log(valueInNumberOfMark);

let isNotLoggedIn = true
let valueInNumberisNotLoggedIn = Number(isNotLoggedIn)
console.table([typeof isNotLoggedIn, typeof valueInNumberisNotLoggedIn, valueInNumberisNotLoggedIn]);

let name = "puchu"
let valueInNumberOfName = Number(name)
console.table([typeof name, typeof valueInNumberOfName, valueInNumberOfName])
// string cannot be converted to number
// NaN type => number

// let isLoggedIn = 1 //true
// let isLoggedIn = "" //false
let isLoggedIn = "puchu" //true

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

/*
1 => true
0 => false
"" => false
"puchu" => true
*/

let  someNumber = 26
let stringNumber = String(someNumber)
console.log([typeof stringNumber, stringNumber]);


// ******************** Operations ********************

let value = 4
let negValue = -value
console.log(negValue);

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 ** 3);
console.log(2 / 2);
console.log(2 % 3);

let str1 = "hello"
let str2 = " puchuu"
let str3 = str1 + str2
console.log(str3);

console.log("2" + 6);
console.log(2 + "6");
console.log("8" + 2 + 6);
console.log(2 + 6 + "8");

console.log((3 + 4) * 5 % 3);

console.log(true);   //true
console.log(+true);  // 1
// console.log(true+);  //error
console.log(+"");   //0

// let num1, num2, num3
// num1 = num2 = num3 = 2 + 2  // code readability absent

let gameCounter = 100
// gameCounter++; //postfix //101 // assign then increment
++gameCounter;  //prefix    //101 // increment then assign
console.log(gameCounter);

let x = 3;
const y = x++;
console.log(`x: ${x}, y: ${y}`);    //x: 4, y: 3

let a = 3;
let b = ++a;
console.log(`a: ${a}, b: ${b}`);    //a: 4, b: 4

// link to study=> https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
// study prefix and postfix from mdn
