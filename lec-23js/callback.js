// function starter(cb){
//     //cb--->maincourse
//     setTimeout(()=>{
//         console.log("starter is served");
//         cb(drinks) //maincourse
//     },2000)
// }

// function drinks(cb){
//     setTimeout(()=>{
//         console.log("drinks is served");
//         cb(bill)
//     },1000)
// }

// function maincourse(cb){
//     //cb--->drinks
//     setTimeout(()=>{
//         console.log("maincourse is served");
//         cb(sweets);
//     },3000)
// }
// function sweets(cb){
//     setTimeout(()=>{
//         console.log("sweets is served");
//         cb()
//     },500)
// }
// function bill(){
//     setTimeout(()=>{
//         console.log("bill pay kr diya");
//     },1000)
// }

//group-1
//starter--->//maincourse-->drinks--->sweets--->bill
starter(maincourse);

//group -2 
//starter --> drinks-->maincourse --->bill
// maincourse();
// drinks();
// sweets();
// bill();