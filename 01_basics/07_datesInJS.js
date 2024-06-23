// time usually in ms from jan
// Date has been a long-standing pain point in ECMAScript. This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), that brings a modern date/time API to the ECMAScript language.
// Temporal, a new Date/Time API
// eg : Temporal.Now.instant()

// Dates :
//----------

let myDate = new Date()
console.log(myDate);    // 2024-06-23T03:10:15.924Z
console.log(myDate.toString()); // Sun Jun 23 2024 03:10:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Sun Jun 23 2024
console.log(myDate.toISOString());  // 2024-06-23T03:10:15.924Z
console.log(myDate.toJSON());   // 2024-06-23T03:10:15.924Z
console.log(myDate.toLocaleDateString());   // 6/23/2024
console.log(myDate.toLocaleString());   // 6/23/2024, 3:10:15 AM
console.log(myDate.toLocaleTimeString());   // 3:10:15 AM
console.log(myDate.toTimeString());    // 03:10:15 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString());  // Sun, 23 Jun 2024 03:10:15 GMT
console.log(typeof myDate); // object

// let myCreatedDate = new Date(2024, 7, 26) // (year, month, date)
console.log(myCreatedDate); //2024-08-26T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Mon Aug 26 2024

// let myCreatedDate = new Date(2003, 7, 26) // (year, month, date) // month start from 0
console.log(myCreatedDate); // 2003-08-26T00:00:00.000Z
console.log(myCreatedDate.toDateString()); // Tue Aug 26 2003

// let myCreatedDate = new Date(2023, 4, 7, 16, 10) // (year, month, date, hour, minutes)
// let myCreatedDate = new Date("2003-08-26")  // 8/26/2003, 12:00:00 AM
let myCreatedDate = new Date("08-26-2003")
console.log(myCreatedDate.toLocaleString());    // 5/7/2023, 4:10:00 PM 

let myTimeStamp = Date.now()
console.log(myTimeStamp); // 01/01/1970 to till now milliseconds // 1719115315693 
console.log(myCreatedDate.getTime()); // get time in ms from 01/01/1970 to till // 1061856000000
console.log(Math.floor(Date.now() / 100)); // in ms // 17191155697
// can be compared easily

let newDate = new Date();
console.log(myDate);    // 2024-06-23T04:10:19.954Z
console.log(myDate.getDate());  // 23
console.log(myDate.getDay());   // 0
console.log(myDate.getFullYear());  // 2024
console.log(myDate.getHours()); // 4
console.log(myDate.getMilliseconds());  // 954
console.log(myDate.getMinutes());   // 10
console.log(myDate.getMonth()); // 5
console.log(myDate.getSeconds());   // 19
console.log(myDate.getTime());  // 1719115819954
console.log(myDate.getTimezoneOffset());    // 0
console.log(myDate.getUTCDate());   // 23
console.log(myDate.getUTCDay());    // 0
console.log(myDate.getUTCFullYear());   // 2024
console.log(myDate.getUTCHours());  // 4
console.log(myDate.getUTCMilliseconds());   // 954
console.log(myDate.getUTCMinutes());    // 10
console.log(myDate.getUTCMonth());   // 5 // gets month of a Date object using Universal Coordinated Time(UTC)
console.log(myDate.getMonth() + 1); // 6

console.log(`The day is ${newDate.getDay()} and the time is ${newDate.toLocaleTimeString('en-IN')}`);
// The day is 0 and the time is 4:32:23 am

console.log(newDate.toLocaleString('default', {
    weekday: "long",
})) // Sunday