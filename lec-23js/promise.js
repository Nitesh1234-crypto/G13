

let p=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let flag =true;
        if(flag){
            return resolve("hello world")
        }
        reject("jo krna hai kr le")
    
    })
    
})
// console.log(p);
// p.then(
//     function(){

//     },
//     function(){

//     }
// )
setTimeout(()=>{
    console.log("sneha")   
   })
p.then((data)=>{
console.log(data)
})
.catch((err)=>{
console.log(err);
})
console.log("hi")
console.log("welcome");
console.log(2+3);
console.log("bye")


function mul(a){
   return new Promise((resolve,reject)=>{
     if(a>6) return resolve(a*5)
        reject("khud kr le multiply")
    })  
}
mul(7).then((data)=>{

})
.catch((err)=>{

})