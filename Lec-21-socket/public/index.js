

const socket= io();


socket.on("message",(data)=>{
    console.log(data)
  })
socket.emit("hi","kem cho")
socket.on("welcome",(data)=>{
    console.log(data)
})