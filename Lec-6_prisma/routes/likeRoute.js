const express = require("express");
const router= express.Router();
const { PrismaClient } = require('@prisma/client');
const isLoggedIn = require("../middleware/verifylogin");
const prisma = new PrismaClient();


router.post("/:blogId",isLoggedIn,async(req,res)=>{
    const {blogId} = req.params;
    const userId = req.user.id;
    let isliked= await prisma.like.findFirst({
        where:{
            blogId:parseInt(blogId),
            userId:userId
        }
    })
    if(isliked){
        let deleteLike= await prisma.like.delete({
            where:{
                id:isliked.id
            }
        })
        let decreaselikecount= await prisma.blog.update({
            where:{
                id:parseInt(blogId)
            },
            data:{
                likecount:{decrement:1}
            }
        })
        res.send("unliked")
    }else{
    const newLike= await prisma.like.create({
        data:{
          authorId:userId,
          blogId:parseInt(blogId) 
        }
    })
    let updatelikecount= await prisma.blog.update({
        where:{
            id:parseInt(blogId)
        },
        data:{
            likecount:{increment:1}
        }

    })
    res.send("Liked successfully")
}

})

module.exports = router;