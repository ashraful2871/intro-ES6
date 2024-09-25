const max = Math.max(15, 18, 12, 48, 65, 78, 45);
const numbers = [3, 8, 5, 4, 78, 45, 45, 25, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
console.log(arrayMax);

// use spread operator use copy
const nums = [4, 5, 6, 8, 9, 10];
const nums2 = nums;
const dosto = [...nums2]; //copy
console.log(dosto);
nums.push(100);
console.log(dosto);
console.log(nums);

// advance
const sonkha = [...numbers, 999]; //add extra elements while copy
console.log(sonkha);
