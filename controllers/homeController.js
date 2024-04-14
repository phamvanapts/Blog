/**
 * Chapter 9
 * MVC
 */
const BlogPost = require('../models/BlogPost.js');

module.exports = async(req,res) => {
    const blogposts = await BlogPost.find({});
    res.render('index',{
        blogposts
    });
}

/**
 * PhamVanA
 * 14/4/2024
 */