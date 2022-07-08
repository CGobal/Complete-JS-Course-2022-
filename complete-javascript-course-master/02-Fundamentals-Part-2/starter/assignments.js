
/*
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


// LECTURE: Function Declarations vs. Expressions

function percentageOfWorld1(population) {
    return `${((population / 7900) * 100).toFixed(2)}%`
}

let armeniaPer = percentageOfWorld1(3);
let georgiaPer = percentageOfWorld1(11);
let russiaPer = percentageOfWorld1(140);
console.log(armeniaPer, georgiaPer, russiaPer);



const percentageOfWorld2 = function(population) {
    return `${((population / 7900) * 100).toFixed(2)}%`
}

console.log(percentageOfWorld2(3),percentageOfWorld2(11), percentageOfWorld2(140));



// LECTURE: Arrow Functions

const percentageOfWorld3 =  population => `${((population / 7900) * 100).toFixed(2)}%`;

console.log(percentageOfWorld3(3),percentageOfWorld3(11), percentageOfWorld3(140));


// LECTURE: Functions Calling Other Functions

function percentageOfWorld1(population) {
    return `${((population / 7900) * 100).toFixed(2)}%`
}

function describePopulation(country, population) {
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)} of the world.`
}

console.log(describePopulation("Armenia", 3));
console.log(describePopulation("Georgia", 10.5));
console.log(describePopulation("Russia", 140));


// LECTURE: Introduction to Arrays

const percentageOfWorld =  population => ((population / 7900) * 100).toFixed(2);
const populations = [3, 11.5, 140, 240];

console.log(populations.length === 4);

const percentages = [percentageOfWorld(populations[0]), percentageOfWorld(populations[1]), percentageOfWorld(populations[2]), percentageOfWorld(populations[3])];

console.log(percentages);



// LECTURE: Basic Array Operations (Methods)

const neighbours = ["Georgia", "Turkey", "Iran"];
console.log(neighbours);

neighbours.push("Utopia");
console.log(neighbours);

neighbours.pop("Utopia");
console.log(neighbours);

if(!neighbours.includes("Germany")) {
    console.log("Probably not a central European country :D");
}


neighbours[neighbours.indexOf("Turkey")] = "Shat Vat Country";
console.log(neighbours);



// LECTURE: Introduction to Objects

const myCountry = {
    country: "Armenia", 
    capital : "Yerevan",
    language : "Armenian",
    population: 3,
    neighbours : ["Georgia", "Turkey", "Iran"]
};



// LECTURE: Dot vs. Bracket Notation

const myCountry = {
    country: "Armenia", 
    capital : "Yerevan",
    language : "armenian",
    population: 3,
    neighbours : ["Georgia", "Turkey", "Iran"]
};

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`)

myCountry.population += 2;
console.log(myCountry.population);

myCountry["population"] -= 2;
console.log(myCountry["population"]);

*/


