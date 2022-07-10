'use strict';
console.log('******');
// Developer Skills & Editor Setup

// Coding Challenge #1
/**
 Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
 */

// MY SOLUTION
// 1) Understanding the problem
// - How to print right days and values?

// 2) Breakind up into sub-problems
// -  How to include all elements of arrey, no metter the length? Answer: Write a for loop
// -  How to match the indexes and "in 1 days"?  Build a string Template literals (index + 1)
//  - How to build the printable phrase?  Adding parts to a template litteral
const printForecast = function (arr) {
  let toPrint = ``;
  for (let i = 0; i < arr.length; i++) {
    toPrint += `... ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(toPrint);
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

// TEACHER's Solution

// 1) Understanding the problem
// - Array transformed to string, separated by ...
// - What is the X days? Answer: index + 1

// 2) Breakind up into sub-problems
// - Transfor array into string
// - Transform each element to string with ºC
// - String needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast2 = function (arr) {
  let str = ``;
  for (let i = 0; i < arr.length; i++) {
    str += ` ${arr[i]} ºC in ${i + 1} days ...`;
  }
  console.log('...' + str);
};

printForecast2([17, 21, 23]);
