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

    const token = user.getJWTTOKEN();

    res.status(201).json({
        sucess:true,
        token,
    });  
};


//login user
exports.loginUser = async(req,res,next)=>{
    const{email,password} = req.body;

    //checking if user has given pwd and email both
    if(!email || !password){
        return next(new ErrorHander("please fill details"),400)
    } 

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("invalid password or email"),401);
        
    }

    const isPasswordMatched = user.comparePassword(password);

    if(!isPasswordMatched){
        return next(new ErrorHander("invalid password or email"),401);
        
    }

    const token = user.getJWTTOKEN();

    res.status(200).json({
        sucess:true,
        token,
    });  

};