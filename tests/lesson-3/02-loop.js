// câu 1
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`Tổng của i là: ${sum}`);

//câu 2
for (let i = 2; i <= 9; i++) {  // i là Vòng lặp cho bảng cửu chương từ 2 tới 9
    console.log(`Bảng cửu chương ${i}:`);
    for (let j = 1; j <= 10; j++) {  // Vòng lặp cho các phép nhân từ 1 đến 10 của từng bảng cửu chương
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("");  // In một dòng trống sau mỗi bảng cửu chương
}

//câu 3
let mang = [];

for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
        mang.push(i);
    }
}
console.log(`Mảng chứa các số lẻ: ${mang}`);

//câu 4

for (let i = 1; i <= 10; i++) {
    let email = `user${i}@example.com`;
    console.log(email);
}

//câu 5

let doanhThu = [
    { "month": 1, "total": 10 },
    { "month": 2, "total": 20 },
    { "month": 3, "total": 30 },
    { "month": 4, "total": 40 },
    { "month": 5, "total": 50 },
    { "month": 6, "total": 60 },
    { "month": 7, "total": 70 },
    { "month": 8, "total": 80 },
    { "month": 9, "total": 90 },
    { "month": 10, "total": 100 },
    { "month": 11, "total": 110 },
    { "month": 12, "total": 120 }
];
let tongDoanhThu = 0;

for (let i = 0; i < doanhThu.length; i++) {
    tongDoanhThu += doanhThu[i].total;
}
console.log(`Tổng doanh thu trong năm là: " ${tongDoanhThu}`);
