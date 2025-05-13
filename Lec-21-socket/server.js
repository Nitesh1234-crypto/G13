
const express = require("express");
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
app.use(express.static(__dirname+"/public"))
io.on("connection",(socket)=>{
    console.log("new person connect with id"+" "+socket.id);
    socket.emit("message","hello world");
    socket.on("hi",(data)=>{
        console.log(data)
    })
    //broadcasting
    io.emit("welcome","welcome to my chat app")
})


server.listen(3000);