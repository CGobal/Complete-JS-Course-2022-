
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

*/

// LECTURE: Arrow Functions

const percentageOfWorld3 =  population => `${((population / 7900) * 100).toFixed(2)}%`;

console.log(percentageOfWorld3(3),percentageOfWorld3(11), percentageOfWorld3(140));