const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];


// 6.1 Tính tổng các giá trị trong scores.
const totalScore = scores.reduce((a, b) => a + b, 0);
console.log(totalScore); // 253

// 6.2 Tính tích các giá trị trong numbers.
const tichNumbers = [1, 2, 3, 4].reduce((a, b) => a * b, 1);
console.log(tichNumbers); // 24

// 6.3 Tính tổng các giá trị trong expenses.
const totalExpenses = [50, 100, 150].reduce((a, b) => a + b, 0);
console.log(totalExpenses); // 300


