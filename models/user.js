const mongoose=require('mongoose');

const userSchema=new mongoose.Schema ({
    name:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true,
    },
    DOB:{
        type:Date,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true,
    }
});

const  User=mongoose.model("User",userSchema);
module.exports = User;