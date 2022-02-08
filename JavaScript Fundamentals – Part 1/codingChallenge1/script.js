// Basic operations using Operators

// Mark's Data
// const markMass = 78;
// const markHeight = 1.69;
const markMass = 95;
const markHeight = 1.88;

// John's Data
// const johnMass = 92;
// const johnHeight = 1.95;
const johnMass = 85;
const johnHeight = 1.76;

// Calculating BMI of both

// Mark's BMI
const bmiMark = markMass / markHeight ** 2;
console.log("Mark's BMI is " + bmiMark);

// John's BMI
const bmiJohn = johnMass / johnHeight ** 2;
console.log("John's BMI is " + bmiJohn);

// If mark has higher bmi than john
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);
