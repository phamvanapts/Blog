/**
 * Chapter 5: Inttroduction MongoDB
 * Chapter 6
 * Chapter 10 User Registration 
 * Định nghĩa một Model User
 * Sử dụng thư viện mongoose
 * Mã hoá mật khẩu
 * Cài đặt thư viện bcrypt: npm i --save bcrypt
 * Thêm thư viện để sử lý mã hoá
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

/**
 * Xây dựng cấu trúc cho Post
 * Bổ sung username, datePosted
 * Bổ sung image - 14/4/24
 */
const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
    // dateUser:{
    //     type:Date,
    //     default:new Date()
    // },
    // image:String
});

UserSchema.pre('save',function(next){
    const user = this
    bcrypt.hash(user.password, 10,(error, hash)=>{
        user.password = hash;
        next();
    })
})

const User = mongoose.model('User',UserSchema);
module.exports = User;

/**
 * Nguời tạo: PhamVanA
 * Ngày tạo: 15/4/2024
 */