const router = require('express').Router();
const verifyToken = require('../middlewares/verifyToken');
const users = require('../models/User');

router.get('/profile',verifyToken,(req,res)=>{
    res.status(200).json({data:req.data});
});

module.exports=router;