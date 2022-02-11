// Object creation, method creation inside object, sting literals, .this method

const objMark = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

objMark.calcBMI();

const objJohn = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

objJohn.calcBMI();
console.log(objJohn.BMI);
console.log(objMark.BMI);

// John Smith's BMI (value) is higher than Mark Miller's (value)

if (objMark.BMI > objJohn.BMI) {
  console.log(
    `${objMark.firstName} ${objMark.lastName}'s BMI (${objMark.BMI}) is higher than ${objJohn.firstName} ${objJohn.lastName}'s (${objJohn.BMI})`
  );
} else if (objMark.BMI < objJohn.BMI) {
  console.log(
    `${objJohn.firstName} ${objJohn.lastName}'s BMI (${objJohn.BMI}) is higher than ${objMark.firstName} ${objMark.lastName}'s (${objMark.BMI})`
  );
}
