# HCMUS-EC-20B01

# ĐỒ ÁN THƯƠNG MẠI ĐIỆN TỬ

## Hướng dẫn cài đặt

####Bước 1:
Download PostgresSQL 
Tạo Database tên: aromadb

####Bước 2: Tạo môi trường debug
Teminal chạy câu lệnh:
> npm install 

####Bước 3:  Tạo bảng
Teminal chạy câu lệnh: 
> nodemon

Truy cập trên trình duyệt:
> localhost:5000/sync

####Bước 4: Đồng bộ database
Teminal chạy câu lệnh sau 
> sequelize db:seed:all

###Bước 5: Kiểm tra kết quả
Trên teminal:
> nodemon

Trên trình duyệt truy cập:
> localhost:5000

***Note: vào file config.json để đổi lại mật khẩu của postgres***