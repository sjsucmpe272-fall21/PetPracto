const ErrorHandler = require("../utils/errorhander");

module.exports = (err, req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server error";

    res.status(err.statusCode).json({
        sucess: false,
        error:err,
        message: err.message,
    });
};