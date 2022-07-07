

// LECTURE: Functions

function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const armenia = describeCountry("Armenia", 3, "Yerevan");
const georgia = describeCountry("Georgia", 11, "Tbilisi");
const russia = describeCountry("Russia", 140, "Moscow");

console.log(armenia);
console.log(georgia);
console.log(russia);

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

console.log(age1, age2);

// So what's the big difference between function declarations and function expressions?   Well, the main practical difference is that we can actually call function declarations before they are defined in the code.

