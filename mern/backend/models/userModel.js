const mongoose = require("mongoose");
const validator = require("validator");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter the name"],
        maxlength:[30,"not more than 30"],
        minlength:[4,"not less than 4"]

    },
    
    email:{
        type:String,
        required:[true,"please enter the email"],
        unique:true,
        validate:[validator.isEmail,"please enter a valid email"]
    },

    password:{
        type:String,
        required:[true,"please enter the email"],
        minlength:[8,"not less than 8"],
        select:false,
    },

    avatar:{
        
            public_id:{
                type:String,
                required:true
            },
    
            url:{
                type:String,
                required:true
            }
        
    },

    role:{
        type:String,
        default: "user"
    },


    resetPasswordToken: String,
    resetPasswordExpire: Date,

});

userSchema.pre("save",async function(next){


    if(!this.isModified("password")){
        next();
    }
    
    this.password = await  bycrypt.hash(this.password,10)
});



//JWT token
userSchema.methods.getJWTToken = function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRE,

    });


};

//compare password
userSchema.methods.comparePassword = async function(enteredPassword){

    return await bycrypt.compare(enteredPassword, this.password);
}


module.exports = mongoose.model("user",userSchema);