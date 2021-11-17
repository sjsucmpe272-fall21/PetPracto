
const productModel = require("../models/productModel")
const Product = require("../models/productModel")

//create product -- admin
exports.createProduct = async (req,res,next)=>{

    const product = await Product.create(req.body);

    res.status(200).json({

        sucess:true,
        product
    })

}


//get all produtcs
exports.getAllProducts = async (req,res)=>{

    const products = await Product.find();
    res.status(200).json({
        
        sucess:true,
        products

        })

}