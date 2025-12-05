const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async() =>{
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Database connected successfully..!");
    } catch (error) {
        console.error(`Error in connecting to mongodb: ${error.message}`)
    }
};

module.exports = connectDB;