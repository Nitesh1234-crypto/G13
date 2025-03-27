const express= require("express");
const app = express();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient()
app.use(express.json());


app.use("/api/users",require("./routes/userRoute"))
app.use("/api/blogs",require("./routes/blogRoute"))
app.use("/api/auth",require("./routes/auth"))
app.use("/api/like",require("./routes/likeRoute"))
app.get("/verify/:token/:userid",async(req,res)=>{
    let {token,userid} = req.params;
    let isToken= await prisma.token.findFirst({
      where:{
        token:parseInt(token),
        userId:parseInt(userid)
      }
    })
    if(!isToken) return res.send("Invalid link")
        else{
            let updateuserEmail= await prisma.user.update({
                where:{
                    id:parseInt(userid)
                },
                data:{
                    isverify:true
                }
            })
            res.send("email verified please login to continue")
    }
})
app.listen(4545,()=>{
    console.log("server started")
})