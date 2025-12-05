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
            message:"User cannot be created",
            error:error.message
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

// update user
exports.updateUser = async(req,res) =>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});

        if(!updateUser){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }
        res.json({
            success:true,
            message:"User updated successfully",
            data:updateUser
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        }); 
    }
}

// get userby id
exports.getUser = async(req, res) =>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);

        if(!user) {
            return res.status(404).json({
                success:false,
                message:"User not found"
            });
        }
        res.json({
            success:true,
            user
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });       
    }
}