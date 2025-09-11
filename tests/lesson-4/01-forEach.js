const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];

// //1.1 In lần lượt từng phẩn tử của numbers
numbers.forEach(val => {
    console.log(val);
}
);

//1.2 tính tổng

let total = 0;
let min = numbers[0];
let max = numbers [0];

numbers.forEach(num => {
    total += num
    if (num < min) {min = num;}
  if (num > max) {max = num;}
});

console.log("tổng là:", total);
console.log("min là:", min);
console.log("max là:", max);

//1.3 tạo mảng mới từ numbers

let double = [];
numbers.forEach(num => {
    double.push (num*2);
});
console.log("nhân đôi:", double);
//tests/lesson-4/01-forEach.js