const express = require("express");
const router= express.Router();
const { PrismaClient } = require('@prisma/client');
const isLoggedIn = require("../middleware/verifylogin");
const prisma = new PrismaClient();
router.post("/",isLoggedIn, async(req,res)=>{
    const {title,description} = req.body;
    console.log(req.user)
    const newBlog = await prisma.blog.create({
        data:{
            Title:title,
            description:description,
            authorId:req.user.id
        }
    })
    res.json({message:"blog added successfully",
        data:newBlog
    })

})
router.get("/:id",async(req,res)=>{
    const {id}=req.params;
    const blog=await prisma.blog.findUnique({
        where:{
            id:parseInt(id),
          
        },
        select:{
            Title:true,
            description:true,
            author:{
                select:{
                    name:true
                }
            }
            }
           
    })
    res.json({data:blog})
})
router.get("/",async(req,res)=>{
    try {
        let allblogs = await prisma.blog.findMany();
        res.json({blogs:allblogs})
    } catch (error) {
        res.json({error:error});
    }
})



module.exports=router