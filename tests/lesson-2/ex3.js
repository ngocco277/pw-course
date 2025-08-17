let giatri = "giá trị";
const number = -1;

if (number > 0) {
    giatri = "giá trị của bạn nhập là số dương";
}

if (number == 0) {
    giatri = "giá trị của bạn nhập là 0";
}

if (number < 0) {
    giatri = "giá trị của bạn nhập là số âm";
}

console.log("số bạn nhập: " + number);
console.log(giatri);