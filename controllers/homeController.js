/**
 * Chapter 9
 * MVC
 */
const BlogPost = require('../models/BlogPost.js');

module.exports = async(req,res) => {
    const blogposts = await BlogPost.find({});
    console.log(`Session lưu ở đây: `);
    console.log(req.session);
    res.render('index',{
        blogposts
    });
}

/**
 * PhamVanA
 * 14/4/2024
 */