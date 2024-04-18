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
 * Bổ sung image - 14/4/24
 */
const BlogPostSchema = new Schema({
    title:String,
    body:String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
        },
    datePosted:{
        type:Date,
        default:new Date()
    },
    image:String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;

/**
 * Nguời tạo: PhamVanA
 * Ngày tạo: 29/3/2024
 */