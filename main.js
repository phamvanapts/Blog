/**
 * Khi chạy chương trình chạy file này đầu tiên
 * 1. cập nhật express vào ứng dụng
 * 2. đặt tên biến khởi tạo
 * 3. đặt cổng 4000
 */

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const colors = require('colors');

// import dotenv from "dotenv"; không sử dụng nữa
const dotenv = require('dotenv');
//Body-parser
const bodyParser = require('body-parser');

// import connectDB from "./db/db.js";
const connectDB = require('./db/db.js');
//import Model
// import BlogPost from "./models/BlogPost.js";
const BlogPost = require('./models/BlogPost.js');
const pva = new express();

const ejs = require('ejs');
pva.set('view engine','ejs');
//public folder for serving static files
pva.use(express.static('public'));
pva.use(morgan('dev'));
pva.use(bodyParser.json());
pva.use(bodyParser.urlencoded({extended:true}));
connectDB();
//Create Page Routes
pva.get('/',async(req,res)=>{
    const blogposts = await BlogPost.find({});
    // res.sendFile(path.resolve(__dirname,'/index.html')); ==> chuyển đến trang tĩnh
    res.render('index', {blogposts:blogposts});
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
    
    // res.sendFile(path.resolve(__dirname,'public/post.html'));



const PORT = process.env.PORT || 4000;
pva.listen(PORT, ()=>{
    console.clear();
    console.log(`================================`);
    console.log(`     PhamVanA Blog`);
    console.log(`      PORT: ${PORT}`);
    console.log(`================================`);
    console.log(`      GOOD LUCK`);
})