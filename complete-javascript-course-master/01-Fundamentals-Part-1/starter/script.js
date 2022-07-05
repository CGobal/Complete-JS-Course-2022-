/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");

let firstName = "Matilda";
console.log(firstName);
console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;
let Person = "jonas"; // Recommended By convention - Do Not start variable name with upper case letter — but it is still legal (we can do it this way)

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "programmer";
let job2 = "teacher";

console.log(myFirstJob);



let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Jonas");

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year; // declare a variable

console.log(year);
console.log(typeof year);

year = 1991; // assigning a value to variable

console.log(year);
console.log(typeof year);


console.log(typeof null);  // object



let age = 30;
age = 31; // So, it was 30 and now it's 31,
//In technical terms, we call this reassigning a value to a variable, or also we say that we mutate the age variable in this case.

const birthYear = 1991; // keyword "const" creates a variable that we cannot reassign or in technical terms, an immutable variable. So, a variable that cannot be mutated,

//birthYear = 1990; // => Uncaught TypeError: Assignment to constant variable.
//const job;  // we CAN NOT declare empty const variables. For example, this is not legal. => Uncaught SyntaxError: Missing initializer in const declaration 

var job = "programmer";
job = "teacher";

lastName = "Schmedtmann";
console.log(lastName);


//Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

// JavaScript String Operator ["+"]
const firstName = "Jonas";
const lasName = "Schmedtmann"

console.log(firstName + " " + lasName);

// Assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25;
x *= 4; // x = x * 4 = 100;
x++; // x = x + 1;
x--; // x = x - 1;
x--;
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

*/

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

//console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 // Assignment is executed from right-to-left   <==
console.log(x,y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);
console.log();



