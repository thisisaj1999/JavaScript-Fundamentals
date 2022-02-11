// Function using (function expression)

// Problem-solving framework: Understand the problem and break it up into sub-problems!

// Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperature.

// Example: [17, 21, 23] will print "... 17C in 1 days ... 21C in 2 days ... 23C in 3 days ..."

// Understanding of problem:
// - array of maximum temperatures
// - thermometer displays a string using these temp.

// Breaking into sub-problems
// - a function that takes array as parameters
// - array with integers
// - the array contain n numbers
// - a loop to iterate upto n numbers
// - declaration of iteration while using string literals

const printForecast = function (arr) {
  const temp = new Array();
  let outputSt = `... `;
  for (let i = 0; i < arr.length; i++) {
    temp.push(`${arr[i]}°C in ${i + 1} days ... `);
    outputSt += temp[i];
  }
  return outputSt;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
