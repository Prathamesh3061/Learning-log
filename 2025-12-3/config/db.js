const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() =>{
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected..!")
    }catch(error){
        console.error(`Error in connecting to mongoDb : ${error.message}`);
    }
};

module.exports = connectDB;