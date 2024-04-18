/**
 * Chapter 9 MVC
 * 14/4/24
 */
module.exports = (req,res,next) =>{
    if(req.files == null || req.body.title == null){
        console.log(`Đây là MiddleWare đã được gọi đến!`,
            `Bạn chưa đủ điều kiện để tạo bài mới`);
        return res.redirect('/posts/new');
    }
    next();
}
// module.exports = (req,res,next)=>{
//     console.log(`Đây là MiddleWare đã được gọi đến!`);
//     next();
// }
/**
 * PhamVanA
 * 14/4/24
 */