// Primitive :-
/*
Call by value .i.e. when copying; the memory reference of actual data is not made available but a copied is given and changes is done in copied

7 types : String, Number, Boolean, null(empty, no value, no 0), undefined(declared but unknown), Symbol,  BigInt
*/


// Not Primitive or Reference :- 
/* 
Call by reference, reference can be given directly

Arrays, Objects, Functions
*/


// To mastery : Objects, Web events

/*
Dynamically typed : variables type need not be defined early (don't need to explicitly declare the variable type before using it.)

Statically typed : variables type nede to be defined early (need to explicitly declare the variable type before using it.)

JS is dynamically typed
 */

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;      // = let userEmial = undefined

// Symbols
const id = Symbol('1234')
const anotherId = Symbol('1234')
console.log( id === anotherId)     //false => returned value is not same

const bigNumber = 3456543576654356754n

const heros = ["shaktiman", "naagraj", "doga"]  // array

// objects => { key : value}
let myObj = {
    name : "puchu",
    age : 20,
}

//function (can be treated  as a variable)
const myfunction = function(){
    console.log("Hello Puchu!");
}

// to kknow the datatype
console.log(typeof outsideTemp) // object
console.log(typeof bigNumber)   // bigint
console.log(typeof myfunction)   // function (function object)

/*
Return type of variables in JavaScript
1) Primitive Datatypes
    Number => number
    String  => string
    Boolean  => boolean
    null  => object
    undefined  =>  undefined
    Symbol  =>  symbol
    BigInt  =>  bigint

2) Non-primitive Datatypes
    Arrays  =>  object
    Function  =>  function
    Object  =>  object
*/

/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, and you do not need to explicitly declare the type of a variable before using it. You can assign different types of values to a variable during its lifetime.

For example, in JavaScript, you can do the following:

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, and the type checking is done at compile-time, before the code is executed.

Languages like Java, C++, and TypeScript are statically typed, and they require you to specify the variable type explicitly when declaring them:

int x = 10; // x is a variable of type int
String name = "John"; // name is a variable of type String
JavaScript's dynamic typing allows for more flexibility but can lead to potential runtime errors if not handled carefully. Static typing, on the other hand, provides better type safety at the cost of some initial verbosity and strictness.
*/

/*
Primitive DataTypes:
--------------------

1.Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
 
2.String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".

3,Boolean: Represents a binary value, either true or false, often used for conditional logic.

4.Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.

5.Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 

6.Symbol (ES6): it is mostly used used to find uniqnece.

7.BigInt (ES11): Represents large integers that cannot be represented by the Number type.



Refence (Object Data Types):
----------------------------

1.Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.

2.Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].

3.Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.

4.Date: Represents dates and times.

5.RegExp: Represents regular expressions for pattern matching.



Some Range of Primitive DataType:
---------------------------------

    1.Number:
        Represents both integers and floating-point numbers.
        Typical Range: -9,007,199,254,740,992 (-2^53) to 9,007,199,254,740,992 (2^53) inclusive.
        Smallest Increment: 2^(-52).

    2.String:
        Represents a sequence of characters.
        No specific range limit, but practical limits depend on memory and system resources.

    3.Boolean:
        Represents true or false.
        Only two possible values: true and false.

    4.Undefined:
        Represents a variable that has been declared but hasn't been assigned a value.
        It has only one possible value: undefined.

    5.Null:
        Represents the intentional absence of any object or value.
        It has only one possible value: null.

    6.Symbol (ES6):
        Represents a unique and immutable value.
        No specific range limit.

    7.BigInt (ES11):
        Represents large integers that cannot be represented by the Number type.
        The range is practically unlimited and depends on available memory.
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


/*
Memory:
-----------

1. Stack (Primitive) - here a copied version of data is provided and chnges are made in the copied data and the original data is remained unchanged

2. Heap (Non- Primitive) - here the reference of the original data is provided and the original data is manipulated since no copied data is provided
 */

let myName = "Disha" // stack
let anotherName = myName //stack
anotherName = "Puchuu" //stack

console.log(myName);  // Disha
console.log(anotherName); // Puchuu

let userOne = {
    email : "user@gmail.com",
    upi : "user@ybl"
} // heap

let userTwo = userOne
userTwo.email = "puchu@gmail.com" // both changed

console.log(userOne.email);
console.log(userTwo.email);

/*
stack : variable declared
heap : value taken from
*/