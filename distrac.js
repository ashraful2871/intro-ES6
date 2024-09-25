const actor = {
  name: "ananta",
  age: 30,
  phone: "01743068544",
  money: 545454,
};
//if right side is an object left side of destructuring wil be object as well.
// use property name as a variable that contains the property value
const { phone, age: boyos, name } = actor;

// const phone = actor.phone;
// const name = actor.name;
// const age = actor.age;

console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(phone);
console.log(name);
console.log(boyos);
console.log(boyos);

// array destructuring.
const numbers = [1, 5, 8, 7, 99, 55];
const [first, second] = numbers;
const [x, y] = [12, 66];

// advance
function doubleThem(a, b) {
  return [a * 2, b * 2];
}
const [protom, ditiyo] = doubleThem(6, 9);
console.log(protom, ditiyo);
