const express = require("express");
const router= express.Router();
const secret= "yahoo"
let jwt = require("jsonwebtoken");
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()

router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    const user = await prisma.user.findUnique({
        where:{
            email:email
        }
    })
    if(!user) return res.status(404).json({message:"User does not exist"})
    if(user.password != password) return res.json({message:"password is incorrect"});
    let token=  jwt.sign(user,secret);
    console.log(token)
    res.json({message:"User logged in",token:token})

})





module.exports= router;
