// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const xyz = 23;
// if (xyz === 23) console.log(23);

// const calAge = birtYear => 2037 - birtYear;

// console.log(xyz);

// // BUG TODO
// console.log('55555555');

// PROBLEM
// We work for a company building a smart home thermometer. Our most rescent task is this: "Given an array of temperatures of one day, calculate the  temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperature = [3, -2, -6, , -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures
// - What's a sensor error? And what to do, when accures?

// 2) Breakind up into sub-problems
// - How to ignore errors?
// -Find max value in temp array
// -Find min value in temp array
// - Subtract min from max(amplitude) and retur it

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperature);
console.log(amplitude);
