// array
//---------

const myArray = [0, 1, 2, 3, 4, 5, true, "puchu"]

/*
Features:
---------
1. resizable and can contain a mix of different dataypes
2. elements can be accessed by the non negative integers; indexes
3. zero-indexed
4. create shallow copy

Shallow copy : properties share same references; changed made to the copy is reflected in the original and vice versa
Deep copy : properties do not share same references; changes made to either the original or copy you are rest assured that the changes are not reflected on the other 
*/

const myHeros = ["shaktiman", "naagraj"]
const myArray2 = new Array(1, 2, 3, 4)
// console.log(myArray[7]);

/*
const numbers = [1, 2, 3, 4]
undefined
numbers
(4) [1, 2, 3, 4]
0: 1
1: 2
2: 3
3: 4
length: 4

[[Prototype]]: Array(0)
at: ƒ at()
concat: ƒ concat()
constructor: ƒ Array()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
findLast: ƒ findLast()
findLastIndex: ƒ findLastIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toReversed: ƒ toReversed()
toSorted: ƒ toSorted()
toSpliced: ƒ toSpliced()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
with: ƒ with()
Symbol(Symbol.iterator): ƒ values()
Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}

[[Prototype]]: Object
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
__proto__: (...)
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__() 
*/

// Array Methods:
// ----------------

// myArray.push(26)    // [ 0, 1, 2, 3, 4, 5, true, 'puchu', 26 ]
// myArray.push(27)    // [ 0, 1, 2, 3, 4, 5, true, 'puchu', 26, 27 ]
// myArray.push(22)    // [ 0, 1, 2, 3, 4, 5, true, 'puchu', 26, 27, 22 ]
// myArray.pop()   // [ 0, 1, 2, 3, 4, 5, true, 'puchu', 26, 27 ]

// myArray.unshift(26) // [ 26, 0, 1, 2, 3, 4, 5, true, 'puchu' ]

// insert element at the start shifting all the elements resulting in load on computer
// no load on computer

myArray.shift() // remove the start element // [ 1, 2, 3, 4, 5, true, 'puchu' ] 

// console.log(myArray.includes(26)); // false
// console.log(myArray.indexOf(26)); // -1  // since 26 does not exists
// console.log(myArray.indexOf('puchu')); // 6

// const newArray = myArray.join()

// console.log(myArray);   // [ 1, 2, 3, 4, 5, true, 'puchu' ] // type: object
// console.log(newArray);  // 1,2,3,4,5,true,puchu // type: string




// slice, splice:
// ----------------
console.log("A ", myArray); // A  [ 1, 2, 3, 4, 5, true, 'puchu' ]

const myn1 = myArray.slice(1, 3)
console.log(myn1);  // [ 2, 3 ] // 

console.log("B ", myArray); // B  [ 1, 2, 3, 4, 5, true, 'puchu' ]

const myn2 = myArray.splice(1, 3)
console.log("C ", myArray); // C  [ 1, 5, true, 'puchu' ]
console.log(myn2);  // [ 2, 3, 4 ]

// slice does not manipulates original array and returns the elements excluding the element at the end index
// splice manipulates the original array by taking out the portion of the array, elements that is in the range including start and end