import { test } from "@playwright/test";

test("Add personal notes", async ({ page }) => {
  const notes = [
    { title: "Nhớ lúc trước gặp anh hay nói rằng", content: "Trời đẹp xanh như em với anh." },
    { title: "Này người yêu em thương mến ơi anh hãy yêu màu xanh (anh hãy yêu màu xanh)", content: "Mà nếu có lỡ duyên ta sau chẳng thành" },
    { title: "Vì em ra đi trước anh", content: "Này người yêu khi anh nhớ em hãy ngước lên trời xanh (hãy ngước lên trời xanh)" },
    { title: "R.A.P - 10G là thuốc tiên", content: "Anh mang âm nhạc tới đây để chuốc nghiện" },
    { title: "Bia Sài Gòn xanh không đá ướp lạnh", content: "Thấy mùi máu tanh thì họ mới xuống tiền" },
    { title: "Nếu em không phiền và ngửi được khói thuốc", content: "Mình var vào nhau và mặc kệ nhói buốt" },
    { title: "Cái giá phải trả thì đời đâu nói trước", content: "Là thiên thần sa ngã hay em tự trói buộc" },
    { title: "Chỉ là ánh nến dưới bóng đêm", content: "Nhưng Không soi rọi được đời mây đen" },
    { title: "Và những lối cũ đã quen", content: "Xa lạ khi không còn cầm tay em" },
    { title: "Vì ngày còn xanh em đã không còn anh,Đại lộ về đêm trên con xe thật nhanh", content: "Cuộc đời họa ta như đang họa tranh,Hóa thành tàn tro xong bay lên trời xanh" }
  ];

  await test.step("Vào playwrightvn > Lesson 3", async () => {
    await page.goto('https://material.playwrightvn.com/');
    await page.locator('//a[@href="04-xpath-personal-notes.html"]').click();
  });

  await test.step("Thêm mới 10 note có nội dung là tiêu đề và một phần ngắn", async () => {
    for (const note of notes) {
      await page.locator('//input[@type="text" and @id="note-title"]').pressSequentially(note.title);
      await page.locator('//textarea[@id="note-content"]').pressSequentially(note.content);
      await page.locator('//button[@id="add-note"]').click();
    }
  });

  await test.step("Thực hiện search theo tiêu đề bài báo bất kì.", async () => {
    await page.locator('//input[@type= "text" and @id= "search"]').fill('Bia');
  });
})