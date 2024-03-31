const mongoose = require('mongoose');

const BlogPost = require('../models/BlogPost');

mongoose.set('strictQuery', true);
mongoose.connect(
    'mongodb+srv://phamvana:1908121PvA@atlascluster.idbmrpp.mongodb.net/Blog', 
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
});
console.log(`Ket noi thanh cong`);
BlogPost.create({
    title: "Test create Post",
    body: "Tesst ajbhd"
}, (error, blogpost)=>{
    console.log(error, blogpost)
}
);