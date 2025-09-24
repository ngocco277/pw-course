# 1. Function advance
## `Lambda`: 
### Một cách ngắn gọn viết hàm trong JS.
### Sử dụng dấu => thay vì từ khoá function
    - Cú pháp:
        (parameters) => {
        // Code here    
        }
## `Anonymous`:
### Hàm không có tên, thường được sử dụng 1 lần hoặc làm đối số truyền vào các hàm khác.
    - Cú pháp:
        Function (parameters) {
        // Code here
        }
# 2. DOM = Document Object Model
### Một element: 
    ● <option>United States</option>
        <option> là thẻ mở
        </option> là thẻ đóng
    ● <img src="image.jpg" alt="Image description"/>
        Thẻ tự đóng 
    ● <option value="usa">United States</option>
        <option> là thẻ mở
        value là thuộc tính
        usa là giá trị của thuộc tính
        United States là Text
        </option> là thẻ đóng
## Các thẻ HTML thường gặp
    - Thẻ <div> (viết tắt của divide): dùng để chia các khối trong trang web
    - Thẻ <h1></h1> đến <h6></h6> (viết tắt của heading): dùng để tạo ra các header phân cấp
    theo thứ tự từ lớn đến bé.
    - Thẻ <form></form>: dùng để chứa một form thông tin.
    - Thẻ input: text, email, radio, checkbox, file, color, range, date
    - Thẻ textarea: hiển thị ô input, dạng to.
    - Thẻ radio button: tạo nút chọn một (radio).
    - Thẻ checkbox: tạo nút chọn nhiều lựa chọn (checkbox).
    - Thẻ list và dropdown: hiển thị danh sách hoặc menu thả xuống.
    - Thẻ button: tạo nút bấm.
    - Thẻ table: hiển thị bảng dữ liệu.
    - thead = table heading
    - tr = table row = 1 dòng
    - th: table heading: text in đậm

    - tbody
    - tr -> td = table data
    - Thẻ date picker: tạo bộ chọn ngày.
    - Thẻ slider: tạo thanh trượt.
    - Thẻ iframe: hiển thị nội dung từ một trang web khác bên trong trang hiện tại.
# 3. Selector
### Là cách chọn phần tử trên trang
### Có nhiều kiểu: 
        ○ XPath selector 
        ○ CSS selector 
        ○ Playwright selector 
## XPath selector
###  `XPath = XML Path`
#### Có 2 loại:
    ○ Tuyệt đối: đi dọc theo cây DOM
        bắt đầu bởi 1 /
    ○ Tương đối: tìm dựa vào đặc tính
         bắt đầu bởi 2 //
    //tenthe[@thuoctinh=”gia
    tri”]

#### Nên dùng XPath tương đối

# 4. Playwright basic syntax
### `test` => Đơn vị cơ bản để khai báo một test
      import { test } from '@playwright/test';
      test('<tên test>', async ({ page }) => {
      // Code của test
      });
### `test step` => Đơn vị nhỏ hơn test, để khai báo từng step của test case
        await test.step('Tên step', async () => {
        // Code here
        });
        ------
        test('<tên test>', async ({ page }) => {
        await test.step('Tên step', async () => {
        // Code here
        });
        });
#### `Lưu ý`: step nên được map 1-1 với test case để dễ dàng maintain.

### `Basic actions` => Navigate
    await page.goto('https://pw-practice.playwrightvn.com/');
### `Basic actions` => Click
        Single click
        await page.locator("//button").click();
        Double click
        await page.locator("//button").dblclick();

        Click chuột phải
        page.locator("//button").click({
        button: 'right'
        })

        Click chuột kèm bấm phím khác
        page.locator("").click({
        modifiers: ['Shift'],
        })
### `Basic actions` => Input 
        Fill
        Giống việc bạn paste content vào một ô input
        page.locator("//input").fill('Playwright Viet Nam');
        pressSequentially
        Giống việc bạn gõ từng chữ cái vào ô input
        page.locator("//input").pressSequentially('Playwright
        Viet Nam', {
        delay: 100,
        });

### `Basic actions` Radio/checkbox , Select option , Set Input File
        Lấy giá trị hiện tại đang là check hay không:
        const isChecked =
        page.locator("//input").isChecked();

        Check/ uncheck
        page.locator("//input").check();
        page.locator("//input").setChecked(false);