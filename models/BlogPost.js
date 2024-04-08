/**
 * Định nghĩa một Model BlogPost
 * Sử dụng thư viện mongoose
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema;

/**
 * Xây dựng cấu trúc cho Post
 */
const BlogPostSchema = new Schema({
    title:String,
    body:String
});

const BlogPost = mongoose.model('BlogPost',BlogPostSchema);
module.exports = BlogPost;

