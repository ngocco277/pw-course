const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// 2.1 in lần lượt từng kí tự của str
for (const char of str) {
    console.log(char);
}
// 2.2 tạo mảng đảo ngược từ str
const reversedChars = [];
for (let i = str.length - 1; i >= 0; i--) 
reversedChars.push(str[i]);
console.log("đảo ngược:", reversedChars);

// 2.3 tìm và in vị trí đầu tiền và cuối cùng của 3 giá trị trong arr

let firstIndex = -1; 
let lastIndex = -1;
let count = 0;
for (const  num of arr ) {
  if (num === 3) {
    if (firstIndex === -1)
    { 
        firstIndex = count;
    }
    lastIndex = count;
  }
  count++;
}
console.log(firstIndex, lastIndex);

// 2.4 Lọc các phần từ xuất hiện 1 lần trong dupArr

const freq = {};
for (const n of dupArr) freq[n] = (freq[n] || 0) + 1;
const uniqueOnce = [];
for (const n of dupArr) if (freq[n] === 1) uniqueOnce.push(n);
console.log("uniqueOnce:", uniqueOnce); 
//tests/lesson-4/02-for-of.js