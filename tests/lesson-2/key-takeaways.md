# Version Control System (VCS)
#### - Là hệ thống quản lý các phiên bản tài liệu, giúp chúng ta xem lịch sử chỉnh sửa của từng phiên bản.
#### - Version control system: gồm nhiều loại khác nhau, nhưng có 3 loại chính:
    - local: lưu ở máy cá nhân.
    - Centralize: lưu ở một máy chủ tập trung.
    - Distributed: phần tán -> lưu ở nhiều máy khác nhau. (Git cũng được gọi là Distributed)
# Git
#### - Git là từ viết sai chính tả (có chủ đích) do get đã được dùng rồi.
#### - Dùng git do nhu cầu quản lý phiên bản và làm việc giữa nhiều người với nhau.
#### - Tới hiện nay Git được đánh giá là những tool được sử dụng phổ biến nhất.
#### - Git dễ dùng, nhiều tính năng vượt trội, free, xử lý nhanh
#### GIT & GITHUB
    - GIT: Là 1 phần mềm được cài đặt nằm ở máy của bạn, là một commandline tool, là công cụ quản lý phiên bản đưa file vào Git repository, và có các tính năng của Version Control System
    - GITHUB: là 1 phần mềm online, đưa code từ local máy của bạn để lưu online, là công cụ có giao diện, là nơi để upload các git repository lên, có tính năng của VCS và 1 số tính năng khác.
## Các vùng trạng thái của Git
### Working Directory (màu đỏ)
    - Chứa các file mới hoặc các file có thay đổi.
    - git add . hoặc git add tên file ở vùng muốn add qua vùng Staging area
### Staging Area (màu xanh)
    - Các file đưa vào vùng chuẩn bị commit ( tạo ra các phiên bản).
    - Các file này được add từ Woriking Directory
    - git commit -m "tên version" để đưa các file ở vùng qua vùng chứa phiên bản Repository
### Repository (màu xám)
    - Vùng chứa các phiên bản đã commit.
    - Được commit từ vùng Staging Area
## Câu lệnh Git
    - git init: khởi tạo git và sinh ra 3 vùng Working Directory, Staging Area, Repository.
    - git config --global user.name "user"
    - git config --global user.email "email"
    => có --global là cấu hình cho toàn bộ máy tính
    => không có --global thì config cho 1 repo.
    - git add <file> => chỉ add 1 file từ vùng Working Directory.
    - git add . => add tất cả các file từ vùng Working Directory.
    - git commit -m "tên version"
    - git remote add origin "copy ssh key từ github pass vô" nếu có sẵn rồi thì bỏ qua lệnh này.
    - git push origin main => push code lên github
# Javascript basic
    - Nên dùng let thay vì dùng var.
    - Tên biến không được đặt dấu cách và bắt đầu bằng số và không được trùng với các từ trong Java được đặt làm keywork như if, var.
    -  constant là hằng số, ở đây giá trị không thay đổi được
    - trong javaScript có 8 chuối dữ liệu, học 3 kiểu chính String, Boolean, Number.
