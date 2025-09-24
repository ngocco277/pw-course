# JAVASCRIPT
### - `Var`: có thể truy cập được vào biến trước khi được khai báo: Giá trị undefined (phạm vi GLOBAL)
### - `Let`: KHÔNG thể truy cập trước khi khai báo (phạm vi SCOPE)
# ĐIỀU KIỆN
## Điều kiện nâng cao: 
    - if...else => 2 điều kiện
    - if...else if => 3 điều kiện  
    - switch...case => nhiều điều kiện 
    - == và != là 2 kiểu so sánh lỏng lẻo và cần convert giá trị về kiểu lớn hơn
## Vòng lặp nâng cao
### `for...in` => dùng để lặp các key "thuộc tính của object" 
#### - `Đối với Object`     
        for (let property in students){
            console.log (property) => lấy như kiểu tên biến
            console.log(students[property]) => lấy kiểu và giá trị.
        } 
#### - `Đối với mảng`
        let numbers = [4,5,67];
        for (let index in numbers){
            console.log(index)
            console.log('index: ${index} : ${numbers[index]}');
        }
### `forEach` => áp dụng cho mảng 
        let numbers = [4,5,76];
        number.forEach ((val) => {
            console.log('$(val)');
        }
        )
### - `for... of` => dùng để lọc qua các phần từ của mảng và lấy ra trực tiếp giá trị
    let names = ['Loi','Uyen','Nhi','Ngoc'];
    for (let name of names) {
        console.log(name);
    }
### - `break` dùng để thoát khỏi vòng lặp
### - `continue` bỏ qua vòng lặp hiện tại và chạy đến vòng lặp tiếp theo.

# Javascript Utils Functionss
### - `Util` là tiện ích
### - `Util function` là các hàm tiện ích có sẵn
### - Có 2 loại Util là: 
    - String Util
    - Array Util
# Javascript String Utils Function
### -`trim()`: dùng làm loại bỏ những khoảng trắng ở đầu và cuối.
     let str = '     Có Ngọc        '
     console.log(str.trim());
### - `toLowerCase()`: in thường hết all các kí tự có trong chuỗi của mình
    let text= 'NGọc có';
    console.log (text.toUpperCase());
### - `toUpperCase()`: in hoa lên hết all các kí tự có trong chuỗi của mình
    let text= 'NGọc có';
    console.log (text.toUpperCase());

### - `includes()`: dùng để kiểm tra 1 chuỗi con có nằm trong chuỗi cha hay không (trả về true hoặc false) (phân biệt chữ hoa và chữ thường)
    let str = 'hoc Javascript'
    console.log(str.includes('Java'));

### - `replace()`: dùng để thay thế chuỗi này bằng 1 chuỗi khác 
    let text = str.replace('hoc Javascript', 'JS')
    console.log(text);   

### - `split()`: chia 1 chuỗi thành các chuỗi con dựa vào 1 kí tự nào đó để chia 
    let name = ['Loi,nam,Hoa'];
    let result = name.split(',');
    console.log(result);

### - `substring()`: sẽ trả về 1 chuỗi, và chuỗi đó bắt đầu bằng index mình truyền vào
    let str = 'hoc Javascript rat vui'
    let result = str.substring(giatribatdau,giatriketthuc)
    console.log(result);

### - `indexOf()`: trả về vị trí xuất hiện đầu tiên xuất hiện của chuỗi con trong chuỗi chính, nếu có thì sẽ hiển thị vị trí, nếu k tồn tại thì sẽ hiển thị là -1
    let str = 'hoc Javascript rat vui'
    let result = str.indexOf('vui')
    console.log(result);



# Javascript Array Utils Functions
### - `map`:  Tạo ra mảng mới bằng cách áp dụng hàm lên từng phần tử.
    let numbers = [1, 2, 3];
    let doubled = numbers.map((val) => val * 2);
    console.log(doubled); 👉 [2, 4, 6]
### - `filter`: Tạo ra mảng mới và lọc ra các phần tử thỏa điều kiện
    let numbers = [1, 2, 3, 4, 5, 6];
    let evenNumbers = numbers.filter((val) => val % 2 === 0);
    console.log(evenNumbers); // [2, 4, 6]
### - `find`: Tìm phần tử đầu tiên trong mảng thỏa điều kiện và nếu không có → undefined.
    let numbers = [1, 2, 3, 4, 5, 6];
    let evenNumbers = numbers.find((val) => val % 2 === 0);
    console.log(evenNumbers); // [2]

### - `reduce`: - Áp dụng một hàm lên từng phần tử (từ trái qua phải) để trả về 1 giá trị duy nhất
    let numners = [1,2,3,4];
    let sum = numbers.reduce((total,num) => total + num, 0)
    console.log(sum)
    // total: biến này nhận giá trị duy nhất
    //num: phần từ của mảng
    //0 giá trị khởi tạo cho biến total

### - `some`: kiểm tra ít nhất 1 phần tử thỏa điều kiện. nếu có là true, không có là false
    let numbers = [1, 3, 5, 6];
    let evenNumbers = numbers.some((val) => val % 2 === 0);
    console.log(evenNumbers); // true
### - `every`: kiểm tra các phần tử trong mảng thỏa điều kiện, nếu all thỏa thì true, có 1 cái không thỏa thì là false
    let numbers = [1, 2, 3, 5, 6];
    let evenNumbers = numbers.every((val) => val % 2 === 0);
    console.log(evenNumbers); // false
### - `push`: thêm một hoặc nhiều phần tử vào cuối mảng để thay đổi mảng gốc
    let fruits = ["Táo", "Chuối"];
    fruits.push("Xoài");
    console.log(fruits); //  ["Táo", "Chuối", "Xoài"]

 ### - `shift`: Xóa phần tử đầu tiên trong mảng và trả về phần tử bị xóa. chỉ cho xóa phần tử đầu tiên, không cho truyền tham số nào vào để xóa
    let fruits = ["Táo", "Chuối", "Xoài"];
    let removed = fruits.shift();
    console.log(removed); // KQ "Táo"
    console.log(fruits);  // KQ ["Chuối", "Xoài"]
### - `sort`: - Sắp xếp mảng theo thứ tự tăng/giảm. Mặc định là chuỗi.
# KIẾN THỨC BỔ SUNG
### - `pop()`: Xóa và trả về phần tử cuối cùng của mảng, làm thay đổi mảng gốc
    let arr = [1, 2, 3];
    let last = arr.pop(); // arr = [1, 2], last = 3
    console.log(arr); // [1, 2]
    console.log(last); // 3

### `unshift()`: - Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
    let arr = [1, 2, 3];
    arr.unshift(0); // arr = [0, 1, 2, 3]
    console.log(arr); // [0, 1, 2, 3]

### `trim()`: - Loại bỏ khoảng trắng ở đầu và cuối chuỗi, không thay đổi chuỗi gốc mà trả về chuỗi mới..
    const str = " Hello World ";
    Để xoá khoảng trắng ở đầu sử dụng trimStart()
    Để xoá khoảng trắng ở cuối sử dụng trimEnd()

### `for of`: - Bản chất một chuỗi cũng là một mảng. Ví dụ chuỗi "Playwright" bản chất là một mảng gồm các kí tự ["P", "l", "a", "y", "w", "r", "i", "g", "h", "t"] Để lặp trong mảng này, bạn sử dụng string.length để lấy độ dài của chuỗi và lấy ra từng phần tử một theo index