

//LECTURE: Values and Variables
const myCountry = "Armenia";
let population = 2974282;
const continent = "Europe";

// console.log(country);
// console.log(population);
// console.log(continent );

//LECTURE: Data Types

const isIsland = false;
let language;
// console.log("**********************");
// console.log(typeof myCountry);
// console.log(typeof population);
// console.log(typeof isIsland);
// console.log(typeof language);

// LECTURE: let, const and var

language = "Armenian";
//isIsland = true; // => Uncaught TypeError: Assignment to constant variable.

// LECTURE: Basic Operators

console.log("**********************");

let halfPopulation = population / 2;
//console.log(halfPopulation);
population++;
console.log(population);
let populationFinland = 6000000;
console.log(population > populationFinland);
let populationAverage = 33000000;
console.log(population < populationAverage);
let populationInMillion = population / 1000000;
let description = myCountry + " is in " + continent + ", and its " + populationInMillion.toFixed(2) + " million people speak " + language;
// console.log(description);



// LECTURE: Strings and Template Literals

description = ` ${myCountry} is in ${continent}, and its ${populationInMillion.toFixed(2)} million people speak ${language}`;
//console.log(description);

// LECTURE: Taking Decisions: if / else Statements

population = 3;
if(population  > 33) {
        console.log(`${myCountry}'s population is above average`) 
} else {
    console.log(`${myCountry}'s population is ${33 - population} million below average`)     
}
