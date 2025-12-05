const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        default:""
    },
    contactMethods:[
        {
            label:{type:String, default:"Mobile"}, // eg. mobile, work
            value:{type:String, required:true}
        }
    ],

    avatarColor:{
        type:String, 
        default:"#3b82f6"
    }
}, { timestamps:true});

module.exports = mongoose.model("Contact", contactSchema);