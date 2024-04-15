/**
 * Chapter 10 User Registation
 * Store User Controller
 */
const User = require('../models/User.js');
const path = require('path');

module.exports = async (req,res)=>{
   User.create(req.body)
    res.redirect('/');
}
