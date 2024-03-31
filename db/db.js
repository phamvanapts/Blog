// import mongoose from "mongoose";
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect('mongodb+srv://phamvana:1908121PvA@atlascluster.idbmrpp.mongodb.net/Blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        //thông báo 
        console.log(`| Kết nối dữ liệu thành công ! |`);
        console.log(`================================`.red);
        console.log(`Morgan hoạt động ghi lại logger ...`.red);
        // console.log(
        //     `MongoDB is connected: ${conn.connection.host}`.white
        // );
    } catch (error) {
        console.log(`ERROR: ${error.message}`);
        process.exit(1);
    }
};


module.exports = connectDB;
// export default connectDB;