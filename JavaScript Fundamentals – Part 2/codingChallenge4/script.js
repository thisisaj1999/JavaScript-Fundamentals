// Tip calculator using Loops

// bills array contains test data values
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// empty arrays for tips and totals
const tips = new Array();
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
  const calcTip = function () {
    if (bills[i] >= 50 && bills[i] <= 300) {
      tips.push(bills[i] * 0.15);
      totals.push(tips[i] + bills[i]);
    } else {
      tips.push(bills[i] * 0.2);
      totals.push(tips[i] + bills[i]);
    }
  };
  calcTip();
}
console.log(tips);
console.log(totals);

// Bonus

// function for average calculation
const calcAverage = function (arr) {
  // a temp variable taken to store numbers
  let sum = 0;
  //   for loop to add values to sum variable using assignment operators
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  //   Normal average calculation
  return sum / arr.length;
};
console.log(calcAverage(totals));
