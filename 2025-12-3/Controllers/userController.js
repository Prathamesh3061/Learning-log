const User = require("../models/User.js");

// crete USer
exports.createUser = async(req , res )=>{
    try {
        const {name, age , email} = req.body;
        const user = await User.create({name, age, email});
        res.status(201).json({
            success:true,
            message:"User created Successfully",
            user
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:"User cannot created"
        })
    }
};

// get all users
exports.allUser = async(req, res)=>{
    try {
        const user = await User.find();
        res.status(200).json({
            success:true,
            data:user
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};