/**
 * Chapter 2: Introduction to npm & Express
 * Introduction to express
 * Khi chạy chương trình chạy file này đầu tiên
 * Thêm thư viên express vào ứng dụng
 * Đây là thư viện chạy suốt chương trình của chúng ta
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */

const express = require('express');

/**
 * Phần tự bổ sung
 * Thư viện này theo dõi quá trình đưa dữ liệu từ client lên server
 * quá trình xử lý có thành công hay không
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
const morgan = require('morgan');

const path = require('path');

/**
 * Phần tự bổ sung
 * Thư viện màu của console
 * Chỉ để trang trí khi chạy console
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
const colors = require('colors');

// import dotenv from "dotenv"; không sử dụng nữa
const dotenv = require('dotenv');
//Body-parser
const bodyParser = require('body-parser');

// import connectDB from "./db/db.js";
const connectDB = require('./db/db.js');

/**
 * import Model
 * Lấy dữ liệu từ /models/BlogPost.js
 * Định nghĩa cấu trúc cần lưu trữ dữ liệu kết nối trong MongoDB
 * Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
const BlogPost = require('./models/BlogPost.js');
/**
 * Chapter 2: Introduction to npm & Express
 * Introduction to express
 * Đầu tiên, thêm express vào ứng dụng
 * Đặt tên ứng dụng pva
 * Sử dụng express để chạy toàn bộ ứng dụng
 * Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
const pva = new express();

 /**
  * Chapter 4: Template Engines
  * npm install ejs --save
  * Render trang HTML động
  * Sử dụng EJS vào ứng dụng
  * Với pva.set('view engine','ejs') chúng ta thông báo cho Express sử dụng EJS
  * Phạm Văn Á
  * Ngày tạo: 10/4/2024
  */
const ejs = require('ejs');
pva.set('view engine','ejs');

/**
 * Chapter 2: Introduction to npm & Express
 * public folder for serving static files
 * Sử dụng chạy các trang tĩnh ví dụ như about.html
 * phần này sẽ được thay thế bởi ejs
 * Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
pva.use(express.static('public'));

/**
 * Phần tự bổ sung
 * Sử dụng để ghi nhật ký cho các req và req
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
 * 
 */
pva.use(morgan('dev'));

/**
 * 
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
//Create new post
pva.get('/posts/new',(req,res)=>{
    res.render('create');
    // res.sendFile(path.resolve(__dirname,'public/post.html'));
});

//post Store
pva.post('/posts/store', async(req,res)=>{
    //model create a new doc with browser data
    console.log(req.body);
    await BlogPost.create(req.body)
        res.redirect('/');
});
    

/**
 * Phần tự bổ sung
 * Đặt tên biến PORT là chạy ứng dụng
 * Sử dụng dotenv - biến môi trường để cài đặt cổng
 * Có thể thay đổi cổng trong file .env hoặc giá trị gán tại file này
 * Mục đích nếu file .env có lỗi hoặc không tải được thì vẫn chạy được server
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
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
 * Người tạo: Phạm Văn Á
 * Ngày tạo: 10/4/2024
 */
pva.listen(PORT, ()=>{
    console.clear();
    console.log(`================================`);
    console.log(`     PhamVanA Blog`);
    console.log(`      PORT: ${PORT}`);
    console.log(`================================`);
    console.log(`      GOOD LUCK`);
})