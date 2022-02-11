// Ternary Operators

// const bill = 275;
const bill = 40;
// const bill = 430;

const tip = bill >= 50 && bill <= 300 ? (15 * bill) / 100 : (20 * bill) / 100;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`
);
