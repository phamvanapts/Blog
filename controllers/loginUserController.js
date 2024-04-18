/**
 * Chapter 10 User Registation
 * Login Process
 */
const bcrypt = require('bcrypt');
const User = require('../models/User');
module.exports = (req,res)=>{
    const { tenDangNhap, matKhau}  = req.body;
    console.log(`Bạn đăng nhập với tên: `+ tenDangNhap);
    User.findOne({username:tenDangNhap})
        .then((username)=>{
        if(username){
            console.log(`Tìm thấy user tên: `+ username.username);
            bcrypt.compare(matKhau,username.password,(error,same)=>{
                if(same){
                    req.session.userId = username._id;
                    console.log(`Mật khẩu đúng!`);
                    console.log(`Về trang chủ!`);
                    res.redirect('/');
                }else{
                    console.log(`Mật khẩu sai!`);
                    console.log(`Quay lại trang đăng nhập!`);
                    res.redirect('/auth/login');
                }
            })

        }else{
            console.log(`Không tìm thấy user!`);
            console.log(`Quay lại trang đăng nhập!`);
            res.redirect('/auth/login');
        }
        }
    )
    // res.redirect('/');
}


/**
 * PhamvanA
 * 15/4/24
 */