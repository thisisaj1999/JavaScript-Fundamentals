// Functions stored in array

const calcTip = function (bill) {
  if (bill >= 50 && 300 >= bill) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const bills = [125, 555, 44]; //bill values using TEST DATA

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]; //tips calculation using function calling and storing the returned value as an element of an array

const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]; //calculating total bill amount including tip

console.log(bills, tips, total);
