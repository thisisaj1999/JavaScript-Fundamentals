// Function using (function expression)

//Average score calculator
const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

//average score Dolphins
// const avgDolphins = calcAverage(44, 23, 71); //Data 1
const avgDolphins = calcAverage(85, 54, 41); //Data 2
console.log(avgDolphins);

//average score Koalas
// const avgKoalas = calcAverage(65, 54, 49); //Data 1
const avgKoalas = calcAverage(23, 34, 27); //Data 2
console.log(avgKoalas);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    return `Dolphins win (${avgDolphins} vs ${avgKoalas})`;
  } else if (avgKoalas >= 2 * avgDolphins) {
    return `Koalas win (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `no one wins`;
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));
