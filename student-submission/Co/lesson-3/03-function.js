//câu 1
function multiply(a, b) {
    console.log(`Kết quả của ${a} x ${b} = ${a * b}`); 
}

multiply(5, 5);  
multiply(10, 5);

//câu 2

function findMin(a, b, c) {
    return Math.min(a, b, c);  
}

let boSo1 = findMin(27, 7, 96);  
let boSo2 = findMin(11, 11, 5);   

console.log(`Giá trị nhỏ nhất bộ số 1 là:" ${boSo1}`);
console.log(`"Giá trị nhỏ nhất bộ số 2 là:" ${boSo2}`);

//câu 3

// Danh sách học sinh 
const students = [
    { name: "An", score: 70 },
    { name: "Bích", score: 75 },
    { name: "Có", score: 80 },
    { name: "Đạt", score: 81 },
    { name: "Hùng", score: 90 },
    { name: "Linh", score: 100 }
];
function getTopStudents(students, threshold) {
    let topStudents = [];  // mảng rỗng để lưu top học sinh
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name);  // Thêm tên học sinh vào mảng
        }
    }

    return topStudents;
}
let topStudents = getTopStudents(students, 80);
console.log("Danh sách học sinh top: ", topStudents);

//câu 4

function calculateInterest(principal, rate, years) {
    let total = principal + (principal * rate * years) / 100;
    return total;
}

// Gọi hàm với ví dụ thực tế
let principal = 1000;
let rate = 5;
let years = 3;

let totalAmount = calculateInterest(principal, rate, years);

console.log("Tổng số tiền sau " + years + " năm là: " + totalAmount);