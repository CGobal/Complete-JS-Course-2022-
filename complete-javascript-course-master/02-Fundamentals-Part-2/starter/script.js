'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 534;
// const if = 55;



// Functions

function logger() {
    console.log("My name is Jonas");
}

 // invoking / running / calling  function
logger();
logger();
logger();


// While constructing a function we can also specify something called PARAMETERS and parameters are like variables that are specific only to this function and they will get defined once we call the function.

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);   // This actual values (5/0) are called ARGUMENTS
// capture the value returned from the function execution into a variable "appleJuice"

console.log(appleJuice);
//console.log(fruitProcessor(5, 0));

We are defining specific values here which are the arguments (5, 0)
which will get passed into the function as these parameters (apples, oranges). 
And so when the function is running now, apples in here will be five and oranges will be zero.
Then we use these values to build this juice string here then we return that value from the function and what that means is, that basically the result of calling this function here will be the juice value that was just returned


const appleOrangeJuice = fruitProcessor(2, 4); 
console.log(appleOrangeJuice);

// Keep your code DRY - don't repeate yourself .  Functions are perfect for implementing dry code because they are reusable code blocks, that together, make up all applications.

const num = Number('23');



// Function Declarations vs. Expressions

// Function Declarations
const age1 = calcAge1(1991); // Hoisting

function calcAge1(birthYear) {
    return 2037 - birthYear;
}    

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}                               // function in JS are just values
const age2 = calcAge2(1991);

//console.log(age1, age2);

// So what's the big difference between function declarations and function expressions?   Well, the main practical difference is that we can actually call function declarations before they are defined in the code.

//*******************************************************************************

// Arrow Functions

// And an arrow function is simply a special form of function expression that is shorter and therefore faster to write. plicated.BUT there is another fundamental difference - arrow function do not get a so-called this keyword.

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1980, "Bob"));



//Functions Calling Other Functions

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 3));

*/

// Reviewing Functions

const calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // If you put this line of code below return statement, it will be ignored, because , the return statement immediately exits or immediately returns the function.
        return retirement;
    } else {
        console.log(`${firstName} has already retired`);
        return -1;
    }

// Using Ternary operator for the same purpose
 //   return retirement > 0 ? retirement
 //           : retirement === 0 ? `You made it ${firstName}! Time to retire!`
 //          : `${firstName} is already retired`;

}

console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1950, "Mike"));
console.log(yearsUntilRetirement(1972, "Bob"));
