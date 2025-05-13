

function milna(permission){
   return new Promise((resolve,reject)=>{
        if(permission==true) return resolve("milne aagayi");
        reject("ghr walo ko pata chl gya");
    })
}

function movie(moviename){
    return new Promise((resolve,reject)=>{
        if(moviename=="barbie") return resolve("let's go")
            reject("akele chla jaa");
    })

}
function dinner(mood){
    return new Promise((res,rejt)=>{
        if(mood=="good") return res("dinner krte hai ek ache restaurant mai")
            rejt("ghr jaa rhi hu ")
        
    })
}

// milna(true)
// .then((data)=>{
//     console.log(data);
//    return movie("barbie")

// })
// .then((data)=>{
// console.log(data);
//  return dinner("bad")
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((err)=>{
//     console.log(err)
// })




async function wadapurakro(){
    try {
        let data=await milna(false);
let data2=await movie("barbie");
let data3=await dinner("good");
console.log(data, data2, data3)

    } catch (error) {
        console.log(error)
    }

}
wadapurakro()


console.log("helo ");
console.log("bye")
// sum(5,10)