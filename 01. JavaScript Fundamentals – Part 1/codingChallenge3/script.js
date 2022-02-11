// Conditional Statements (if - else if - else)

// Calculating Average score for every team

// Dolphins : 96, 108, 89
const avgDolphins = (96 + 108 + 89) / 3;
console.log(`Average score Dolphins ${avgDolphins}`);

// Koalas : 88, 91, 110
const avgKoalas = (88 + 91 + 110) / 3;
console.log(`Average score Koalas ${avgKoalas}`);

// Winner of the Game
if (avgDolphins > avgKoalas) {
  console.log(
    `The winner of the match is Team Dolphins by ${avgDolphins - avgKoalas}`
  );
} else if (avgDolphins < avgKoalas) {
  console.log(
    `The winner of the match is Team Koalas by ${avgKoalas - avgDolphins}`
  );
} else if (avgDolphins === avgKoalas) {
  console.log("Match Draw");
} else {
  console.log("InvalidDATA");
}

/* 
// BONUS DATA 1

// Calculating Average score for every team

// Dolphins 97, 112, 101
const avgDolphins = (97 + 112 + 101) / 3;
console.log(`Average score Dolphins ${avgDolphins}`);

// Koalas 109, 95, 123
const avgKoalas = (109 + 95 + 123) / 3;
console.log(`Average score Koalas ${avgKoalas}`);

// Winner of the game after achieving the minimum score of 100
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(
    `The winner of the game is Team Dolphins by ${avgDolphins - avgKoalas}`
  );
} else if (avgDolphins < avgKoalas && avgKoalas >= 100) {
  console.log(
    `The winner of the game is Team Koalas by ${avgKoalas - avgDolphins}`
  );
} else if (avgDolphins === avgKoalas) {
  console.log(`Match Draw`);
} else {
  console.log("InvalidDATA");
}
*/

/*
// BONUS DATA 2

// Calculating Average score for every team

// Dolphins : 97, 112, 101
const avgDolphins = (97 + 112 + 101) / 3;
console.log(`Average score Dolphins ${avgDolphins}`);

// Koalas : 109, 95 , 106
const avgKoalas = (109 + 95 + 106) / 3;
console.log(`Average score Koalas ${avgKoalas}`);

// Winner of the game after achieving the minimum score of 100

if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(
    `The winner of the game is Team Dolphins by ${avgDolphins - avgKoalas}`
  );
} else if (avgDolphins < avgKoalas && avgKoalas > 100) {
  console.log(
    `The winner of the game is Team Koalas by ${avgKoalas - avgDolphins}`
  );
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log(`Match Draw`);
} else {
  console.log("InvalidDATA");
}
*/
