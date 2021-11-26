const express = require("express");


const { getAllProducts,createProduct,updateProduct, deleteProduct, getProductDetails } = require("../controllers/productcontroller");
const { isaAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

//add this to the roles you want to check as admin or user "isaAuthenticatedUser,authorizeRoles("Admin")"

router.route("/products").get(getAllProducts);


router.route("/admin/product/new").post(isaAuthenticatedUser,authorizeRoles("Admin"),createProduct);

router
.route("/admin/product/:id")
.put(isaAuthenticatedUser,authorizeRoles("Admin"),updateProduct)
.delete(isaAuthenticatedUser,authorizeRoles("Admin"),deleteProduct)


router.route("/product/:id").get(getProductDetails);

module.exports = router