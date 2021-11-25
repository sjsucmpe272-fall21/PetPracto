const express = require("express");


const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/productcontroller");
const { isaAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();


router.route("/products").get(isaAuthenticatedUser,authorizeRoles("Admin"),getAllProducts);


router.route("/product/new").post(isaAuthenticatedUser,createProduct);

router
.route("/product/:id")
.put(isaAuthenticatedUser,updateProduct)
.delete(isaAuthenticatedUser,deleteProduct)
.get(getProductDetails);



module.exports = router