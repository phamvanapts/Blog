/**
 * Chapter 9 MVC
 * 14/4/24
 */
module.exports = (req,res, next) =>{
    if(req.files == null || req.body.title == null || req.body.body == null ){
        return res.redirect('/posts/new');
    }
    next();
}
/**
 * PhamVanA
 * 14/4/24
 */