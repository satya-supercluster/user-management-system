const router = require('express').Router();
const users = require('../models/User');
const bcrypt = require('bcrypt');
const jwt =require('jsonwebtoken');
router.post('/register',async (req,res)=>{
    const {name,email,password}=req.body;
    if(name&&email&&password){
        const user = await users.findOne({email:email});
        if(!user){
            try{
                const hashPassword = await bcrypt
                .genSalt(12)
                .then((salt => bcrypt.hash(password, salt)))
                .then(hash => hash);
                const newUser = new users({
                    name:name,
                    email:email,
                    password:hashPassword,
                });
                try{
                    const savedUser = await newUser.save();
                    if(savedUser){
                        jwt.sign({savedUser},process.env.JWT_SECRET_KEY,{expiresIn:'1d'},(err,token)=>{
                            res.status(200).send({token:token});
                        });
                    }
                    else{
                        res.status(400).send({success:false,msg:"An error occurred"});
                    }
                }
                catch(error){
                    res.status(400).send({success:false,msg:"An error occurred"});
                }
            }
            catch(err){
                res.status(500).send({status:false,msg:"An error occurred"});
            }
        }
        else{
            res.status(500).send({status:false,msg:"User already exists"});
        }
    }
    else{
        res.status(500).send({status:false,msg:"All fields required"});
    }
});

router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    if(email&&password){
        const user = await users.findOne({email:email});
        if(user){
            bcrypt.compare(password, user.password, (err, cred) => {
                //if error then throw error
                if (err) res.status(500).send({status:false,msg:"An error occured! Please try again later"});
                else
                //if both match then you can do anything you want
                if (cred) {
                    jwt.sign({user},process.env.JWT_SECRET_KEY,{expiresIn:'1d'},(err,token)=>{
                        if(err){
                            res.status(400).send({success:false,msg:"An error occurred"});
                        }
                        else{
                            res.status(200).json({token:token});
                        }
                    });
                } else {
                    res.status(401).json({ msg: "Invalid credencial" });
                }

            })
        }
        else{
            res.status(500).send({status:false,msg:"User doesn't exists"});
        }
    }
    else{
        res.status(500).send({status:false,msg:"All fields required"});
    }
})


module.exports=router;