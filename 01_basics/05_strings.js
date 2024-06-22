const name = "Disha"
const repoCount = 26
// console.log(name + repoCount + "Value");/

console.log(`Hello! My name is ${name} and my repo count is ${repoCount}`);
/*
`` => string interpolation
placeholders are made and the values can be injected directly

In JavaScript, backticks (`) are used to create template literals. Template literals are string literals that can span multiple lines, include variable interpolation, and can contain special characters.
Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders). 
*/

console.log('hello ' + "puchu");

//using objects : inside String constructor => String("")
const gameName = new String('dishaa-ch-com')
// console.log(gameName); // [String: 'Disha']
// console.log(typeof gameName); // object
/*
String {"Disha"}
0: "D"
1: "i"
2: "s"
3: "h"
4: "a"
length: 5
[[Prototype]]: String
[[PrimitiveValue]]: "Disha"
*/

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4)); // index
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4) // negative value no preferred
console.log(newString);

const anotherString = gameName.slice(-8, 4) // negative value is considered
console.log(anotherString);

const newStringOne = "    dishaa   "
console.log(newStringOne);
console.log(newStringOne.trim()); // strip whitespaces - white space characters and line terminators


const url = "https://puchuu.com/disha%26choudhury"
/* browser does not understand spaces so it converts the space to url language(kind of)
const url = "https://puchuu.com/disha choudhury" =
const url = "https://puchuu.com/disha%26choudhury"
*/

console.log(url.replace('%26', '-'));

console.log(url.includes('puchuu'))
console.log(url.includes('puchu'))
console.log(url.includes('saswati'))

console.log(gameName.split("-")); // array dt