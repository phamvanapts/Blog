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
 */
const path = require('path');

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
 * Ngày cập nhật: 10/4/2024
 */
const BlogPost = require('./models/BlogPost.js');
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
pva.set('view engine','ejs');

/**
 * Chapter 2: Introduction to npm & Express
 * public folder for serving static files
 * Sử dụng chạy các trang tĩnh ví dụ như about.html
 * phần này sẽ được thay thế bởi ejs
 * Ngày cập nhật: 10/4/2024
 */
pva.use(express.static('public'));

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
connectDB();
//Create Page Routes
pva.get('/',async(req,res)=>{
    const blogposts = await BlogPost.find({});
    // res.sendFile(path.resolve(__dirname,'/index.html')); ==> chuyển đến trang tĩnh
    res.render('index', 
    {
        blogposts:blogposts
    }
);
    // console.log(blogposts);
});
//about
pva.get('/about',(req,res)=>{
    res.render('about');
    // res.sendFile(path.resolve(__dirname,'public/about.html')); ==> chuyển đến trang tĩnh
});

//contact
pva.get('/contact',(req,res)=>{
    res.render('contact');
    // res.sendFile(path.resolve(__dirname,'public/contact.html'));
});

//post
// pva.get('/post',(req,res)=>{
//     res.render('post');
//     // res.sendFile(path.resolve(__dirname,'public/post.html'));
// });
// post/:id
pva.get('/post/:id',async(req,res)=>{
    const blogpost = await BlogPost.findById(req.params.id);
    res.render('post',{
        blogpost
    });
    // console.log(blogpost);
    // res.sendFile(path.resolve(__dirname,'public/post.html'));
});

/**
 * Chapter 6
 * route tạo bài viết mới
 * Cập nhật:11/4/2024
 * Create new post
 */
pva.get('/posts/new',(req,res)=>{
    res.render('create');
    // res.sendFile(path.resolve(__dirname,'public/post.html'));
});

/**
 * Chapter 6
 * Tạo bài viết mới
 * //post Store
 * thêm xử lý file
 * Cập nhật: 11/4/2024
 * tạo biến image là giá trị files.image
 * 
 */
pva.post('/posts/store', async(req,res)=>{
    //model create a new doc with browser data
    console.log(req.body);
    let image = req.files.image;
        image.mv(path.resolve(__dirname,'public/img',image.name),
        async(error) => {
            await BlogPost.create({
                ...req.body,
            image:'/img/'+ image.name
        });
            res.redirect('/');
    })
    
});
    

/**
 * Phần tự bổ sung
 * Đặt tên biến PORT là chạy ứng dụng
 * Sử dụng dotenv - biến môi trường để cài đặt cổng
 * Có thể thay đổi cổng trong file .env hoặc giá trị gán tại file này
 * Mục đích nếu file .env có lỗi hoặc không tải được thì vẫn chạy được server
 * Người tạo: Phạm Văn Á
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
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 29/3/2024
 */