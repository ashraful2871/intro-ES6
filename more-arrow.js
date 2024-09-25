const different = (x, y) => x - y;
const multiply = (first, second, third) => first * second * third;

//single parameter or one parameter
const getAge = (person) => person.age;
const student = { name: "ashraful", age: 25 };
const age = getAge(student);
console.log(age);

const getThird = (numbers) => numbers[2];
const third = getThird([4, 9, 88, 2, 13]);
console.log(third);

const doubleIt = (num) => num * 2;

// no parameter
const getPI = () => Math.PI;
console.log(getPI());

//large arrow function. if you want to get any thing returned from this function. then you have to use return keyword.
const doMath = (x, y, z) => {
  const sum = x + y + z;
  const multi = x * y * z;
  const result = sum + multi;
  return result;
};
const math = doMath(3, 5, 6);
console.log(math);
