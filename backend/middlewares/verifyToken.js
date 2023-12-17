const jwt=require('jsonwebtoken');
const verifyToken = (req,res,next)=>{
    const bearerHeader = req.headers['authorization'];
    if(bearerHeader){
        const token = bearerHeader.split(' ')[1];
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,data)=>{
            if(err){
                res.status(500).send({status:false,err:"An error occurred! Please login again"});
            }
            else{
                req.data=data;
                next();
            }
        })
    }
    else{
        res.status(500).send({status:false,err:"An error occurred! Please login again"});
    }
};
module.exports=verifyToken;