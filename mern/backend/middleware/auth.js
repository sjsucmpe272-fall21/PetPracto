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

    req.User = await User.findById(decodedData.id);

    next();
};