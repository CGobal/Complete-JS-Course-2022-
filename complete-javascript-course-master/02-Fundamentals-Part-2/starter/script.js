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




// Introduction to Arrays

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2020, 2008);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay"; // Only primitive values, are immutable. As Array is not a primitive value, so we can actually always change it so we can mutate it. EVEN if we declare the friends variable with "const".
console.log(friends); // ['Michael', 'Steven', 'Jay']


// friends = ["Bob", "Alice"];  // Now what we can NOT do is to actually replace the entire Array. //Uncaught TypeError: Assignment to constant variable.


const jonas = ['Jonas', "Shmedtmann", 2037 - 1991, "teacher", friends, [10, 20, 30]];

console.log(jonas);


// Exercise
const calcAge = function(birthYear) {
    return 2037 - birthYear;
}
const years = [1991, 1985, 1957, 1967, 1987];

console.log(calcAge(years)) // NaN
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])]; // So basically we can place function calls into an Array just fine, because they will produce a value.
console.log(ages);

// my example
const addTwo = (num1, num2) => num1 + num2;
const sums = [addTwo(10, 30), addTwo(20, 8), addTwo(98, 80), addTwo(30, 43)];
// So basically we can place function calls into an Array just fine, because they will produce a value.
console.log(sums); // [40, 28, 178, 73]



// Basic Array Operations (Methods)

// Add elements
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

friends.unshift("John");
console.log(friends)

// Remove elements
friends.pop(); // Last
const popped = friends.pop(); 
console.log(popped);
console.log(friends);

friends.shift(); // First
console.log(friends);

console.log(friends.indexOf("Steven")); // 1
console.log(friends.indexOf("Bob")); // -1 --> Not exist in the array


// this👇 method uses strict equality:
friends.push(23)
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false // it does not do type coercion
console.log(friends.includes(23)); // true

if (friends.includes("Steven")) {
    console.log("You have a friend called Steven");
}



// Introduction to Objects

// arrays are a data structure, which can be used to basically store multiple related values in the same variable.

const jonasArray = [ 
    "Jonas",
    "Schmedtmann", 
    2037 - 1991,
    "teacher",
    ["michael", "Peter", "Steven"]
];

// So in objects, we actually define key value pairs. And so then we can give each of these values here, a name.

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann", 
    age: 2037 - 1991, //  we can put any expression here. So this will be calculated,and then will be assigned to age.
    job: "teacher",
    friends: ["michael", "Peter", "Steven"]
}

// so this object, which is called Jonas has five properties. So property first name with the value of Jonas, property last name with the value of Schmedtmann....

// We should use arrays for more order data,  and objects for more unstructured data. And data that we actually want to name, and then retrieve from the object, based on that name.




//  Dot vs. Bracket Notation

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann", 
    age: 2037 - 1991, //  we can put any expression here. So this will be calculated,and then will be assigned to age.
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"]
}
console.log(jonas);

console.log(jonas.lastName);
console.log(jonas["lastName"]);

const nameKey = "Name";
console.log(jonas["first" + nameKey]);
console.log(jonas["last" + nameKey]); // in the square brackets, we could put any expression here
// So when we need to first compute the property name, like we did here with the first and last name, then of course we have to use the bracket notation. in any other case, just use the dot notation, which looks a lot cleaner and it's also easier to use.

// console.log(jonas."first" + nameKey]); // SyntaxError: Unexpected string 


const interestedIn = prompt("What do you whant to know about Jonas? Choose between firstName, lastName, age, job, and friends");


if(jonas[interestedIn]) {  // not "undefined" (we are here ignoring that value could alse be empty string or 0)
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstName, lastName, age, job, and friends.")
}

jonas.location = "Portugal";
jonas['twitter'] = '@jonasschmedtman';
console.log(jonas);

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`)

jonas.length



// Object Methods

const jonas = {
    firstName: "Jonas",
    lastName: "Schmedtmann", 
    birthYear: 1991, 
    job: "teacher",
    friends: ["Michael", "Peter", "Steven"],
    hasDriverLicense: false,

    // calcAge: function(birthYear) {
    //     return 2037 - birthYear;
    // } // any function that is attached to an object is called a method

    // calcAge: function() {
    //     // console.log(this)
    //     return 2037 - this.birthYear;
    // }

    calcAge: function() {
        this.age = 2037 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-year old  ${this.job}, and he has ${this.hasDriverLicense ? "a" : "no"} driver's license.`
    }
};

// So if you can think of functions as simply being values then you can see that a method is actually also a property. It just happens to be a property that holds a function value.     So here we have a string value, here we have an array value,here we have a Boolean value, and here we have a function value.

console.log(jonas.calcAge());

console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

//console.log(jonas["calcAge"](1991)); 

// So the "this keyword" or the "this "variable is basically equal to the object on which the method is called, or in other words, it is equal to the object calling the method.

// Challenge
// "Jonas is a 46-year old teacher, and he has a(NO) driver license"

console.log(jonas.getSummary()); 





//*******************************************************************************
// Iteration: The for Loop

//So, loops are a fundamental aspect of every programming language, because they basically allow us to automate repetitive tasks. So, tasks that we have to perform over and over again.

// console.log("Lifting weights repetition 1 ⛹️");
// console.log("Lifting weights repetition 2 ⛹️");
// console.log("Lifting weights repetition 3 ⛹️");
// console.log("Lifting weights repetition 4 ⛹️");
// console.log("Lifting weights repetition 5 ⛹️");
// console.log("Lifting weights repetition 6 ⛹️");
// console.log("Lifting weights repetition 7 ⛹️");
// console.log("Lifting weights repetition 8 ⛹️");
// console.log("Lifting weights repetition 9 ⛹️");
// console.log("Lifting weights repetition 10 ⛹️");

// for loops keep running while condition is TRUE
for(let rep = 1; rep <= 10; rep++ ) {
    console.log(`Lifting weights repetition ${rep} ⛹️`);
}
//And so, we initialized the counter of the loop at one. So right here, we created this new rep variable.  
// So after each iteration of the loop, we then increase this counter value, by exactly one, and this happens by the end of the iteration.
// So, what the loop does, is to verify before each repetition, if all condition here ("rep <= 10") still holds true, and only if it does, it will keep running the loop. So it will execute the next iteration.




//  Looping Arrays, Breaking and Continuing

const jonasArray = [ 
    "Jonas",
    "Schmedtmann", 
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

const types = [];

for(let i = 0; i < jonasArray.length; i++) {
    // Reading from jonas array
    console.log(jonasArray[i], typeof jonasArray[i]);

    // Filling types array
    // types[i] = typeof jonasArray[i];
    types.push(typeof jonasArray[i]);
}
console.log(types);


const years = [1991, 2007, 1969, 2020];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
    //or
    //ages[i] = 2037 - years[i];
}
console.log(ages);

// continue and break
// So continue is to exit the current iteration of the loop and continue to the next one.  On the other hand, break is used to completely terminate the whole loop.
console.log("---ONLY STRINGS ----");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] !== "string") continue;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


console.log("---BREAK WITH NUMBER ----");
for(let i = 0; i < jonasArray.length; i++) {
    if(typeof jonasArray[i] === "number") break;

    console.log(jonasArray[i], typeof jonasArray[i]);
}


//  Looping Backwards and Loops in Loops

const jonas = [ 
    "Jonas",
    "Schmedtmann", 
    2037 - 1991,
    "teacher",
    ["Michael", "Peter", "Steven"],
    true
];

// my versions

// console.log("*********************************");
// for (let i = jonas.length - 1; i >= 0; i--) {
//     if(typeof jonas[i] === "object") {
//         for(let j = 0; j < jonas[i].length; j++) {
//             console.log(jonas[i][j]);
//         }
//     } else {
//         console.log(jonas[i]);
//     }
// }


// lecture notes

// 0,1, ....,4
// 4,3,.....,0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for(let exercise = 1; exercise < 4; exercise++) {
    console.log(`------Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {         // inner Loop
        console.log(`Exercise: ${exercise} Lifting weights repetition ${rep} 🎖`)
    }
}

*/



// The while Loop

// for(let rep = 1; rep <= 10; rep++ ) {
//     console.log(`Lifting weights repetition ${rep} ⛹️`);
// }

let rep = 1;
while (rep <= 10) {
    console.log(`WHILE:   Lifting weights repetition ${rep} ⛹️`);
    rep++;
}

// While loop is more versatile than the for loop, which means that it can be used in a larger variety of situations. And that's because it does not really need a counter (it does really not have to depend on any counter variable...). But all the while loop really needs is the condition which needs to stay true for it to keep running.

let dice = Math.trunc(Math.random() * 6) + 1;  // random number between 1 and 6

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if(dice === 6) console.log('Loop is about to end...');
}

//So whenever you do need a loop without a counter, you can reach for the while loop.    So basically that happens whenever you do not know beforehand how many iterations the loop will have.


