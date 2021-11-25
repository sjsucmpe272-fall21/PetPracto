const ErrorHander = require("../utils/errorhander");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.isaAuthenticatedUser = async(req,res,next)=>{

    const {token} = req.cookies;

    console.log(token);

    if(!token){
        return next(new ErrorHander("please login to access this resource",401));
    }

    const decodedData = jwt.verify(token,process.env.JWT_SECRET);

    req.user = await User.findById(decodedData.id);

    next();
};


//authorize roles

exports.authorizeRoles = (...roles) =>{
    return (req,res,next)=>{

        if(!roles.includes(req.user.role)){
            return next(
            new ErrorHander(`Role: ${req.user.role} is not allowed to access this resource`, 403)
            );
        }

        next();

    };
}