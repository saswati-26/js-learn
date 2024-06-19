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