/**
 * Chapter 9: Refactoring to MVC
 * Tạo file newPostController.js
 * 
 */
module.exports = (req,res) =>{
    if(req.session.userId){
       return res.render('create');
    }
    res.redirect('/auth/login');
}
/**
 * Người tạo: PhamVanA
 * Ngày tạo: 14/4/24
 */