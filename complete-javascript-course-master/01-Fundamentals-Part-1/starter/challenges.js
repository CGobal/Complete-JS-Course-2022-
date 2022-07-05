// Code Challenge #1
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.

Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.
GOOD LUCK 😀
*/

let massMark, heightMark, massJohn, heightJohn, BMIMark, BMIJohn, markHigherBMI ;

//Data 1:
massMark = 78;
heightMark = 1.69;
massJohn = 92;
heightJohn = 1.95;

//Data 2:
// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

BMIMark = massMark / heightMark ** 2;
BMIJohn = massJohn / heightJohn ** 2;
markHigherBMI = BMIMark > BMIJohn;
//console.log(BMIMark, BMIJohn, markHigherBMI);


