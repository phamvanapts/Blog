/**
 * Chapter 11
 * User Logout
 */
module.exports = (req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/');
    })
}
/**
 * PhamVanA
 * 18/4/24
 */