const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter the product name"],
        trim:true
    },

    description:{
        type:String,
        required:[true,"please enter the product description"]
    },

    price:{
        type:Number,
        required:[true,"please enter the product price"],
        maxlength:[8,"price cannot exceed 8 characters"]
    },

    rating:{
        type:Number,
        default:0,
        
    },

    images:[

        {
            public_id:{
                type:String,
                required:true
            },
    
            url:{
                type:String,
                required:true
            }
        }
    ],

    category:{
        type:String,
        required:[true,"please enter the category"],
        
        
    },


    stock:{
        type:Number,
        required:[true,"please enter the product stock"],
        maxlength:[4,"cannot exceed 4 digits"],
        default:1
    },

    numodrenumOfReviews:{

        type:Number,
        default:0,
        reviews:[

            {
                name:{
                    type:String,
                    required:true
                },

                rating:{
                    type:Number,
                    required:true,
                },

                comment:{
                    type:String,
                    required:true
                }
            }
        ],


        createdAt:{
            type:Date,
            default:Date.now
        }

    }

    

})


module.exports = mongoose.model("product",productSchema);