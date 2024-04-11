/**
 * Chapter 5: Inttroduction MongoDB
 * Chapter 6
 * Định nghĩa một Model BlogPost
 * Sử dụng thư viện mongoose
 * 
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

/**
 * Xây dựng cấu trúc cho Post
 * Bổ sung username, datePosted
 */
const BlogPostSchema = new Schema({
    title:String,
    body:String,
    username:String,
    datePosted:{
        type:Date,
        default:new Date()
    },
    images:String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;

/**
 * Nguời tạo: PhamVanA
 * Ngày tạo: 29/3/2024
 */