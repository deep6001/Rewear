const express = require("express");
const router = express.Router();
const userController = require("../../controllers/userController");
const {
  loginValidator,
  registerValidator,
  getProfile
} = require("../../validators/userValidation");
const validate = require("../../middlewares/validate");
const Authentication = require("../../middlewares/auth");


router
    .route("/register")
    .post(validate(registerValidator), userController.register);

router
    .route("/login")
    .post(
        validate(loginValidator),
        userController.login
    );

router  
    .route('/getProfile')
    .post(
        Authentication,
        validate(getProfile),
        userController.getProfile
    )

router
    .route("/logout")
    .post(
        Authentication, 
        userController.logout
    );

module.exports = router;
