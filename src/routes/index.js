const express=require("express");
const router=express.Router();

const v1ApiRoutes=rquire('./v1/index');

router.use('/v1',v1ApiRoutes);

module.exports=router;