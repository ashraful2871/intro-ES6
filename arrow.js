//function declaration

// function add(a, b) {
//   const result = a + b;
//   return result;
// }
// function add(a, b) {
//   return a + b;
// }
//function expression
const add2 = function (a, b) {
  return a + b;
};

// arrow function
const add3 = (a, b) => a + b;
const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4;

//multiply
const add5 = (num1, num2) => num1 * num2;

// const sum = add3(5, 6, 5, 8);
// console.log(sum);

// const sum4 = add4(5, 6, 5, 8);
// const sum4 = add5(5, 6);
const multi = add5(5, 6);
console.log(multi);
