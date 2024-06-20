// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

// console.log("2" > 1);
// console.log("02" > 1);
/*
sometimes these types of comparisions do not give desired output
so it is peferred to do the comparision with same type of datatype 
TypeScript do not allow comparision between different datatypes
*/

// console.log(null > 0);      //false
// console.log(null == 0);     //false
// console.log(null >= 0);     //true
/*
The == operator performs type coercion to make the values the same type before comparing them. //Equality
The >= operator compares two values after converting them to primitive types suitable for comparison. //Relational
null == 0 is false because null is only loosely equal to undefined, not to any number.
null >= 0 is true because null is converted to 0 in numeric contexts, and 0 >= 0 is true.
*/

// console.log(undefined == 0);    //false
// console.log(undefined > 0);     //false
// console.log(undefined < 0);     //false

// eqality and comparision are not equal

// === => strict check
console.log("2" == 2);  //true
console.log("2" === 2); //false

// language inconsistency
// priority => clean code