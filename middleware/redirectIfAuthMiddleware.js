/**
 * Chapter 11
 * Prevent Login/Register if Logged In
 *  if user logged in, redirect to home page
 */
module.exports = (req,res,next)=>{
    if(req.session.userId){
        console.log(`Bạn đã đăng nhập.
        Bạn không thể đăng ký/đăng nhập tiếp.
        Hãy thoát tài khoản trước khi tiếp tục`);
        return res.redirect('/');
    }
    next();
}
/**
 * PhamVanA
 * 18/4/24
 */