const express = require("express");
const router = express.Router();
const userRoute = require('./users/user.js')

// const adminRoute = require('./admin/admin.js')

/** userRoute */
router.use('/user', userRoute)


/** expertSlotRoute */

/** bookingRoute */

/** adminRoute */
// router.use('/admin',adminRoute)

module.exports = router;
