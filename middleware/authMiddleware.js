/**
 * Chapter 11
 * Protecting Pages with Authentication Middleware
 * AuthMiddleware
 */
const User = require('../models/User.js');

module.exports = (req,res,next)=>{
    User.findById(req.session.userId)
    .then((username)=>{
        if(!username){
            console.log(`Chua dang nhap`);
        }
    });
    next();
}
/**
 * PhmvanA
 * 17/4/24
 */