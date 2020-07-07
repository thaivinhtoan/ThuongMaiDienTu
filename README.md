# HCMUS-EC-20B01

# NHÓM 20B01

#Database
Bước 1:
Download PostgreSQL 
Tạo Database tên: aromadb

Bước 2:
Teminal chạy câu lệnh:
npm install -s pg pg-hstore 
npm install -g sequelize sequelize-cli

Bước 3: 
Chạy project và chạy đường dẫn 
locallhost:5000/sync

Bước 4:
Teminal chạy câu lệnh
sequelize db:seed:all

Note: vào file config.jison để đổi lại mật khẩu của postgre