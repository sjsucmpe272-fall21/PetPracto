const express = require("express");
const {registerUser, loginUser, logout, getuserDetails, updateProfile} = require("../controllers/usercontroller");
const {isaAuthenticatedUser, authorizeRoles} = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/logout").get(logout);

router.route("/me").get(isaAuthenticatedUser,getuserDetails);

router.route("/me/update").put(isaAuthenticatedUser,updateProfile);

module.exports  = router;