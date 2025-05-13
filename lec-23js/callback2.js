function starter(cb){
    setTimeout(()=>{
        console.log("starter is served");
        cb() 
    },2000)
}

function drinks(cb){
    setTimeout(()=>{
        console.log("drinks is served");
        cb()
    },1000)
}

function maincourse(cb){
    
    setTimeout(()=>{
        console.log("maincourse is served");
        cb();
    },3000)
}
function sweets(cb){
    setTimeout(()=>{
        console.log("sweets is served");
        cb()
    },500)
}
function bill(cb){
    setTimeout(()=>{
        console.log("bill pay kr diya");
        cb()
    },1000)
}


//group -2 
//starter --> drinks-->maincourse --->bill

// starter(function(){
//     drinks(function(){
//         maincourse(function(){
//             bill(function(){
//                 console.log("ghr chlte hai")
//             })
//         })
//     })
// })
//group-1
//starter--->//maincourse-->drinks--->sweets--->bill
starter(function(){
    maincourse(function(){
        drinks(function(){
            sweets(function(){
                bill(function(){
                    console.log("everything done")
                })
            })
        })
    })
})
