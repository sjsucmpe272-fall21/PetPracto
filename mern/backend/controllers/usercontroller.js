const ErrorHander = require("../utils/errorhander");

const User = require("../models/userModel");

//register a user
exports.registerUser = async(req,res,next)=>{

    const {name,email,password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicurl"
        }


    });

    res.status(201).json({
        sucess:true,
        user,
    })

    
}