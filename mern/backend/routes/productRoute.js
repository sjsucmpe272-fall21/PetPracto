const express = require("express");


const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/productcontroller");
const { isaAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//add this to the roles you want to check as admin or user "isaAuthenticatedUser,authorizeRoles("Admin")"

router.route("/products").get(getAllProducts);


router.route("/product/new").post(isaAuthenticatedUser,authorizeRoles("Admin"),createProduct);

router
.route("/product/:id")
.put(isaAuthenticatedUser,authorizeRoles("Admin"),updateProduct)
.delete(isaAuthenticatedUser,authorizeRoles("Admin"),deleteProduct)
.get(getProductDetails);



module.exports = router