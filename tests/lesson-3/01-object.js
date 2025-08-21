//câu 1
const car = {
    make: "Toyota",
    model: "Corolla",
    year: "2021",
}
console.log(`năm sản xuất: ${car.year}`);

//câu 2
const person = {
    name: "Nguyễn Ngọc Có",
    address: {
        street: "532 Kinh Dương Vương",
        city: "Hồ Chí Minh",
        country: "Việt Nam"
    }
};
console.log(`Tên đường của người này là: ${person.address.street}`);

//câu 3
const student = {
    name: "Nguyễn Ngọc Có",
    grades: {
        math: 100,
        english: 99,
    }
};

const diemToan = student["grades"]["math"];
console.log(`Điểm của môn toán là: ${diemToan}`);

//câu 4
const settings = {
    volume: 50,
    brightness: 70,
};
console.log("Thông tin ban đầu là:", settings);
settings.volume = 80;
console.log(`Volume thay đổi thành: ${settings.volume}`);

//câu 5
const bike = {
};
bike.color = "Red";
console.log(bike);

//câu 6
const employee = {
    name: "Nguyễn Ngọc Có",
    age: 30,
};
console.log(employee);
delete employee.age;
console.log(employee);

//câu 7
const school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
};

console.log(school);

