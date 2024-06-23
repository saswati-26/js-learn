const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  // [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);    // flash

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// if uncomment marvel_heros.push(dc_heros): [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// push inserts elements at the end of the array and does not return a new array
// concat combines two or more array and returns a new array

const all_new_heros = [...marvel_heros, ...dc_heros]     // spread // advantage: more arrays can be given
// console.log(all_new_heros); // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // flat(depth) // depth : array inside array
// console.log(real_another_array);
/*
[
  1, 2, 3, 4, 5,
  6, 7, 6, 7, 4,
  5
]
*/


// usage in scrapping
console.log(Array.isArray("Puchuu"));   // false
console.log(Array.from("Puchuu"));   // [ 'P', 'u', 'c', 'h', 'u', 'u' ] // converts to array

// interesting case
console.log(Array.from({name: "pucuu"})); // [] // cannot convert directly have to give what kind of array to make like keys, values array 

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // returns a new array from a set of elemsnt // [ 100, 200, 300 ]