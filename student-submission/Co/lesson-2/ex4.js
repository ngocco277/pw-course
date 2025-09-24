let Chieucao = 170;
let Sole = Chieucao % 100;
let Cannanglytuong = (Sole * 9) / 10;
let Cannangtoida = Sole;
let Cannangtoithieu = (Sole * 8) / 10;

console.log("Chiều cao của bạn là: " + Chieucao + "cm")
console.log(
    "Cân nặng lý tưởng là: " + Cannanglytuong + "kg ," +
    "Cân nặng tối đa là: " + Cannangtoida + "kg ," +
    "Cân nặng tối thiểu là: " + Cannangtoithieu + "kg ,");