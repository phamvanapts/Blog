/**
 * Chapter 9
 * MVC
 */
/**
 * Xử dụng đường dẫn của express
 */
const path = require('path');
const BlogPost = require('../models/BlogPost.js');

module.exports = (req,res) => {
    let image = req.files.image;
    image.mv(path.resolve(__dirname,'..','public/img',image.name),
    async(error) => {
        await BlogPost.create({
            ...req.body,
            image:'/img/'+ image.name
        });
        res.redirect('/');
    })
}

/**
 * PhamVanA
 * 14/4/2024
 */