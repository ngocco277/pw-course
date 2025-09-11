const numbers = [1, 2, 3];
const names = ["Alice", "Bob", "Charlie"];


// 1. push: Thêm 4 vào cuối numbers; thêm "David" vào cuối names.
const numbersArr = numbers.push(4);
const namesArr = names.push("David");
console.log(numbersArr, names);
console.log('numbers sau khi thêm: ', numbers);



// 2. pop: Loại bỏ phần tử cuối của numbers = [1, 2, 3, 4].
const numbersArr1 = [1, 2, 3, 4];
numbersArr1.pop(); // 4
console.log('number sau khi xóa: ', numbersArr1);


// 3. unshift: Thêm 0 vào đầu numbers; thêm "David" vào đầu names.
const numbersArr2 = [1, 2, 3];
const names1 = ["Alice", "Bob", "Charlie"];
numbersArr2.unshift(0);
names1.unshift("David");
console.log('mảng number sau khi thêm: ' + numbersArr2);
console.log(`mảng name sau khi thêm: ` + names1);


// 4. shift: Loại bỏ phần tử đầu của numbers = [1, 2, 3, 4].

const numbersArr3 = [1, 2, 3, 4];
console.log('loại bỏ phần từ đầu là: ' + numbersArr3.shift());
console.log('mảng còn lại sau khi loại bỏ: ' + numbersArr3); 