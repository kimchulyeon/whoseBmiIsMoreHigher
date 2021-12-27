'use strict'

// 클래스 연습
// class User {
//   constructor(firstName, lastName, getFullName, mass, height, calcBMI) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.getFullName = getFullName;
//     this.mass = mass;
//     this.height = height;
//     this.calcBMI = calcBMI;
//   }
// }

// const mark = new User(
//   'Mark',
//   'Miller',
//   function() { return this.firstName + ' ' + this.lastName },
//   78,
//   1.69,
//   function() {
//     this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
//     return this.BMI;
//   }
// );
// const john = new User(
//   'John',
//   'Smith',
//   function() { return this.firstName + ' ' + this.lastName },
//   92,
//   1.95,
//   function() {
//     this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
//     return this.BMI;
//   }
// );

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function() {
    this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
    return this.BMI;
  }
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.BMI = (this.mass / (this.height * this.height)).toFixed(2);
    return this.BMI;
  }
};
const result = mark.calcBMI() > john.calcBMI() 
  ? console.log(`${mark.fullName}'s BMI(${mark.calcBMI()}) is higher than John's BMI(${john.calcBMI()})`)
  : console.log(`${john.fullName}'s BMI(${john.calcBMI()}) is higher than Mark's BMI(${mark.calcBMI()})`)
console.log(result);

