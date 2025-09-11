const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

// 5.1 Kiểm tra scores có giá trị nào > 80 không.
const score = scores.some((s) => s > 80);
console.log(score); 
// 5.2 Kiểm tra ages có giá trị nào < 18 không.
const age = ages.some((a) => a < 18);
console.log(age);   

// 5.3 Kiểm tra words có từ nào dài > 5 không.
const word = words.some((w) => w.length > 5);
console.log(word); 

// console.log(scores.some(s => s > 80)); // true
// console.log(ages.some(a => a < 18));   // true
// console.log(words.some(w => w.length > 10)); // true
//tests/lesson-4/utils-function/01-js-some.js



