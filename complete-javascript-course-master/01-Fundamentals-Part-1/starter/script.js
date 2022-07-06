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




// Strings and Template Literals
const firstName = "Jonas";
const job = "teacher";
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string...`) // `` backticks

console.log('String with \n\
multiple \n\
lines');

console.log(`String with 
multiple 
lines`);



// Taking Decisions: if / else Statements

const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license 🚗');
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

/*
if() {     // This is called - "If-else Controle structure"
} else {
}


const birthYear = 2012;
let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



//Type Conversion and Coercion

const inputYear = '1991';
console.log(Number(inputYear) , inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas')) // NaN ---> invalid number 
console.log(typeof NaN); // => number (it is not --> "not a number", because actially it is a number)

console.log(String(23), 23)

//Type Coercion

//Type coercion happens whenever an operator is dealing with two values that have different types. JavaScript will then, behind the scenes,convert one of the values to match the other value. So in that case, so that in the end, the operation can be executed.

console.log("I am " + 23 + " years old"); // "+" operator converts number to string
console.log('23' + '10' + 3)  // 23103 --> "string"
console.log('23' - '10' - 3) // 10 -->  minus operator actually triggers the opposite conversion (strings to numbers)
console.log('23' * '10') // 230
console.log('23' / '2') // 11.5
console.log("*****");
console.log('123' < 57); // false
console.log('123' > 57); // true
console.log("*****");

let n = '1' + 1;
n = n - 1;
console.log(n) // 10



// Truthy and Falsy Values

// 5 Falsy Values:  0, "", undefined, null, NAN ----> all of them will became false, when converted to Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 100;
if(money) {
    console.log("Don't spend it all :)");
} else {
    console.log("You should get a job!");
}

let height;

if(height) {
    console.log('YaY! Height is defined!');
} else {
   console.log('Height is UNDEFINED'); 
}



// Equality Operators: == vs. ===

// "=="   --> The loose equality operator
// "==="  --> The strict equality operator 
// "!=="  --> The different operator

const age = "18";

if(age === 18) console.log("You just became an adult :D (strict)");

if(age == 18) console.log("You just became an adult :D (lose)");

// So as a general rule for clean code,avoid the loose equality operator as much as you can. So when comparing values, always use strict equality with the three equal signs.

const favourite = Number(prompt("What's your favourite number?"));

console.log(favourite);
console.log(typeof favourite);

if(favourite === 23) { 
    console.log("Cool! 23 is an amazing number!");
} else if(favourite === 7) {
    console.log("7 is also a cool number");
} else if(favourite === 9) {
    console.log("9 is also a cool number");
} else {
    console.log("Number is not 23 or 7");
}

if(favourite !== 23) console.log("Why not 23?");


// Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//     console.log("Sarah is able to drive!")
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C

console.log(hasDriversLicense && hasGoodVision && isTired);


if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive!")
} else {
    console.log("Someone else should drive...");
}


// The switch 

const day = 'wednesday';

switch(day) {
    case 'monday': // day === 'monday // does strict comparison
        console.log("Plan my course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log("Write code examples");    
        break;
    case 'friday':
        console.log("Record videos");
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend :D");
        break;
    default:
        console.log("Not a valid day!");
}


if(day === "monday") {
    console.log("Plan my course structure");
    console.log("Go to coding meetup");
} else if(day === 'tuesday') {
    console.log("Prepare theory videos");
} else if(day === 'wednesday' || day === 'thursday') {
    console.log("Write code examples");   
} else if(day === 'friday') {
    console.log("Record videos");
} else if(day === 'saturday' || day === 'sunday') {
    console.log("Enjoy the weekend :D");
} else {
    console.log("Not a valid day!");
}



// Statements and Expressions

3 + 4     // This is an expression, because it does produce a value.
1971      // an expression,
true && false && !false // This is an expression, because it will produce a boolean value.

// if() {} , switch() // these are statements, and statements are like full sentences that translate our actions. So the actions that we want the program to perform

if(23 > 10) {
    const str = '23 is bigger';
}

const me = 'Jonas';
console.log(`i'm ${2037 - 1991} years old ${me}`) // you CAN NOT Insert if-else statement in template literal(it only accepts expression, NOT - statements)

*/

// The Conditional (Ternary) Operator

const age = 23;

// age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water 💧');

// Ternary OperatorAnd  - remember that an operator always produces a value. So in other words, Ternary Operator is an expression, we can then assign that value to a variable.

const drink = age >= 18 ? 'wine🍷' : "water 💧"; // all in ONE line of code
console.log(drink);


let drink2;  // We need to define a "drink2" variable outside of the if and the else blogs, because any variable that we define inside of a block, is not available outside.👇👇👇
if(age >= 18) {
    drink2 = 'wine🍷';
} else {
    drink2 = "water 💧";
}
console.log(drink2)

// template literal Does accept Ternanry Operator, because it is an Expression

console.log(`I like to drink ${age >= 18 ? 'wine🍷' : "water 💧"}`)