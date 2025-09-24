const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];


//3.1 in tên và giá trị thuộc tính của student

for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//3.2 tính tổng các giá trị trong student

let total = 0;
for (const key in student) 
if (typeof student[key] === "number") 
total += student[key];
console.log("total:", total);

//3.3 tạo mảng chứa tên các thuộc tính student

let keys = [];
for (const key in student) {
keys.push(key);
}
console.log("keys:", keys)


// tests/lesson-4/03-for-in.js