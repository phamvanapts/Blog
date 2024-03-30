/**
 * Khi chạy chương trình chạy file này đầu tiên
 * 1. cập nhật express vào ứng dụng
 * 2. đặt tên biến khởi tạo
 * 3. đặt cổng 4000
 */

const express = require('express');
const morgan = require('morgan');
const path = require('path');

const pva = new express();

const ejs = require('ejs');
pva.set('view engine','ejs');
//public folder for serving static files
pva.use(express.static('public'));
pva.use(morgan('dev'));

//Create Page Routes
pva.get('/',(req,res)=>{
    // res.sendFile(path.resolve(__dirname,'/index.html'));
    res.render('index');
});
//about
pva.get('/about',(req,res)=>{
    res.render('about');
    // res.sendFile(path.resolve(__dirname,'public/about.html'));
});

//contact
pva.get('/contact',(req,res)=>{
    res.render('contact');
    // res.sendFile(path.resolve(__dirname,'public/contact.html'));
});

//post
pva.get('/post',(req,res)=>{
    res.render('post');
    // res.sendFile(path.resolve(__dirname,'public/post.html'));
});

const PORT = 4000;
pva.listen(PORT, ()=>{
    console.clear();
    console.log(`======================`);
    console.log(`     PhamVanA Blog`);
    console.log(`      PORT: ${PORT}`);
    console.log(`======================`);
    console.log(`      GOOD LUCK`);
})