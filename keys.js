const glass = {
  name: "glass",
  color: "golden",
  price: 12,
  isCleaned: true,
};

console.log(glass);
//all property name
const keys = Object.keys(glass);
//[ 'name', 'color', 'price', 'isCleaned' ]

//all property values
const value = Object.values(glass);
// ["glass", "golden", 12, true];
// console.log(value);

const entries = Object.entries(glass);
//console.log(entries);
// array of array two dimensional array
// [
//   ["name", "glass"],
//   ["color", "golden"],
//   ["price", 12],
//   ["isCleaned", true],
// ];

// delete glass.isCleaned;

// const { isCleaned, ...shortGlass } = glass;

//freeze
// Object.freeze(glass);
// glass.source = "Made in Bangladesh";
// glass.price = 50000;
// delete glass.name;
// console.log(glass);

//seal
Object.seal(glass);
glass.source = "Made in Bangladesh";
glass.price = 50000;
delete glass.name;
console.log(glass);
