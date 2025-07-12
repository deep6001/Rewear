const express = require("express");
const router = express.Router();
// const userRoute = require('./user/user.js')

// const adminRoute = require('./admin/admin.js')

/** userRoute */
// router.use('/user', userRoute)

router.get("/get",(req,res)=>{
    res.status(200).json({message:"hello"})
})

/** expertSlotRoute */

/** bookingRoute */

/** adminRoute */
// router.use('/admin',adminRoute)

module.exports = router;
