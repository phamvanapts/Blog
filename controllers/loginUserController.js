/**
 * Chapter 10 User Registation
 * Login Process
 */
const bcrypt = require('bcrypt');
const User = require('../models/User');
module.exports = (req,res)=>{
    const { tenDangNhap, matKhau}  = req.body;
    console.log(`Ban nhap:`+ tenDangNhap);
    User.findOne({username:tenDangNhap})
        .then((username)=>{
        if(username){
            console.log(`Tim thay user:`+ username.username);
            bcrypt.compare(matKhau,username.password,(error,same)=>{
                if(same){
                    console.log(`Mat khau dung!`);
                    res.redirect('/');
                }else{
                    console.log(`Mat khau sai!`);
                    res.redirect('/auth/login');
                }
            })

        }else{
            console.log(`khong thay user!`)
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