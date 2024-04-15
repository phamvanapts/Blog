/**
 * Chapter 2: Introduction to npm & Express
 * Introduction to express
 * Khi chạy chương trình chạy file này đầu tiên
 * Thêm thư viên express vào ứng dụng
 * Đây là thư viện chạy suốt chương trình của chúng ta
 * Người tạo: Phạm Văn Á
 * Ngày cập nhật: 10/4/2024
 */
const express = require('express');
/**
 * Phần tự bổ sung
 * Thư viện này theo dõi quá trình đưa dữ liệu từ client lên server
 * quá trình xử lý có thành công hay không
 * Người tạo: Phạm Văn Á
 * Ngày cập nhật: 10/4/2024
 */
const morgan = require('morgan');
/**
 * Chapter 7: Uploading an Image with Express
 * Cài đặt thư viện express-fileupload: npm install --save express-fileupload
 * Thêm thư viện vào ứng dụng
 * Cập nhật: 11/4/2024
 */
const fileUpload = require('express-fileupload');
/**
 * Xử dụng đường dẫn của express
 * Không sử dụng tại chương 9
 */
// const path = require('path');
/**
 * Phần tự bổ sung
 * Thư viện màu của console
 * Chỉ để trang trí khi chạy console
 * Người tạo: Phạm Văn Á
 * Ngày cập nhật: 10/4/2024
 */
const colors = require('colors');
// import dotenv from "dotenv"; không sử dụng nữa
const dotenv = require('dotenv');
/**
 * Chapter 6
 * Cài đặt npm install body-parser
 * Xử lý các phương thức gửi lên server
 * Body-parser
 */
const bodyParser = require('body-parser');
// import connectDB from "./db/db.js";
const connectDB = require('./db/db.js');
/**
 * import Model
 * Lấy dữ liệu từ /models/BlogPost.js
 * Định nghĩa cấu trúc cần lưu trữ dữ liệu kết nối trong MongoDB
 * Không sử dụng chương 9
 * Ngày cập nhật: 10/4/2024
 * 14/4/24
*/
// const BlogPost = require('./models/BlogPost.js');
/**
 * Chapter 2: Introduction to npm & Express
 * Introduction to express
 * Đầu tiên, thêm express vào ứng dụng
 * Đặt tên ứng dụng pva
 * Sử dụng express để chạy toàn bộ ứng dụng
 * Ngày cập nhật: 10/4/2024
*/
const pva = new express();
/**
 * Chapter 4: Template Engines
 * npm install ejs --save
 * Render trang HTML động
 * Sử dụng EJS vào ứng dụng
 * Với pva.set('view engine','ejs') chúng ta thông báo cho Express sử dụng EJS
 * Ngày cập nhật: 10/4/2024
*/
const ejs = require('ejs');
const { error } = require('console');
/**
 * Chapter 2: Introduction to npm & Express
 * public folder for serving static files
 * Sử dụng chạy các trang tĩnh ví dụ như about.html
 * phần này sẽ được thay thế bởi ejs
 * Ngày cập nhật: 10/4/2024
 */
pva.use(express.static('public'));
connectDB();
const validateMiddleWare = require('./middleware/validateMiddleware.js');
pva.set('view engine','ejs');
/**
 * Phần tự bổ sung
 * Sử dụng để ghi nhật ký cho các req và req
 * Người tạo: Phạm Văn Á
 * Ngày cập nhật: 10/4/2024
 * 
 */
pva.use(morgan('dev'));
/**
 * Chapter 7: Uploading an image with express
 * Sử dụng thư viện upload ảnh
 */
pva.use(fileUpload());
/**
 * Chapter 6
 * Xử lý các phương thức từ client gửi lên server
 */
pva.use(bodyParser.json());
pva.use(bodyParser.urlencoded({extended:true}));
/**
 * Chapter 8: Introductio to Express Middleware
 * Custom Middleware
 * Ví dụ hoạt động của MiddleWare
 * customMiddleWare lời gọi tạo thông báo ở console
 * validateMiddleWare kiểm tra điều kiện khi tạo bào viết mới
 * Chương 9 MVC đã chuyển thành file validationMiddleware.js
 * Cập nhật: 14/4/24
*/
pva.use('/posts/store',validateMiddleWare);
/**
 * Phần tự bổ sung
 * Đặt tên biến PORT là chạy ứng dụng
 * Sử dụng dotenv - biến môi trường để cài đặt cổng
 * Có thể thay đổi cổng trong file .env hoặc giá trị gán tại file này
 * Mục đích nếu file .env có lỗi hoặc không tải được thì vẫn chạy được server
 * Ngày cập nhật: 10/4/2024
*/
const PORT = process.env.PORT || 4000;
/**
 * Chapter 1: Introduction
 * Chapter 2: Introduction to npm & Express
 * Ứng dụng hoạt động tại cổng PORT mà ta cài đặt
 * Bên cạnh đó có thể ghi các thông báo ra màn hình console
 * Xoá các thông tin trước đó khi chạy chương trình bằng lệnh
 * consle.clear tự tìm hiểu
 * Các thông tin khác chỉ ghi cho vui, hấp dẫn khi thực hiện chương trình
 * Ngày cập nhật: 10/4/2024
*/
pva.listen(PORT, ()=>{
    console.clear();
    console.log(`================================`);
    console.log(`     PhamVanA Blog`);
    console.log(`      PORT: ${PORT}`);
    console.log(`================================`);
    console.log(`      GOOD LUCK`);
})
/**
 * Chapter 9
 * Cập nhật file newPostController vào ứng dụng
 * Chapter 10, 
 * Ngày 14/4/24 , 15/4/24
 */
const newPostController = require('./controllers/newPostController.js');
const homeController = require('./controllers/homeController.js');
const storePostController = require('./controllers/storePostController.js');
const getPostController = require('./controllers/getPostController.js');
const newUserController = require('./controllers/newUserController.js');
const storeUserController = require('./controllers/storeUserController.js');
/**
 *  Chapter 9
 *  Cập nhật controller
 *  Xoá các route cũ
 *  Create Page Routes
 *  14/4/24
*/
pva.get('/',homeController);
/**
 * Chapter 9 MVC
 * Cập nhật Controller
 * 14/4/24
*/
pva.get('/post/:id', getPostController);
/**
 * Chapter 6
 * route tạo bài viết mới
 * Cập nhật:11/4/2024
 * Create new post
 * Chapter 9:
 * Chuyển đổi thành MVC
*/
pva.get('/posts/new',newPostController);
/**
 * Chapter 6
 * Tạo bài viết mới
 * //post Store
 * thêm xử lý file
 * Cập nhật: 11/4/2024
 * tạo biến image là giá trị files.image
 * Chapter 9: MVC 
 * Cập nhật controller
*/
pva.post('/posts/store',storePostController);

/**
 * Chapter 10
 * Register
 */
pva.get('/auth/register',newUserController);
/**
 * Chapter 10
 * Store User
 * 15/4/24
 */
pva.post('/users/register',storeUserController);
/**
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 29/3/2024
*/