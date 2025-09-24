const name = "Nguyễn Văn A";
const emails = "example1@gmail.com,example2@gmail.com,example3@gmail.com";
const date = "2024-05-19";


// 1. Chia name thành mảng các từ (dùng khoảng trắng).
const nameStr = name.split(" ");
console.log(nameStr);

// 2. Chia emails thành mảng các email (dùng dấu phẩy).
const email = emails.split(",");
console.log(email);  // 


// 3. Chia date thành mảng ngày, tháng, năm (dùng dấu gạch ngang).
const dates = date.split("-")
console.log(dates);


