
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

//update Product -- admin

exports.updateProduct = async (req,res,next)=>{

    let product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }

    product = await Product.findByIdAndUpdate(req.params.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        
        }); 

    res.status(200).json({

        success:true,
        product
    })


}

exports.deleteProduct = async(req,res,next)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        return res.status(500).json({

            success:false,
            message:"Product not found"

        })
    }

    await product.remove();

    res.status(200).json({
        success:true,
        message:"product deleted sucessfully"
    })
}