


// function outer(){
//     let a=10;
//     function inner(){
//         a++;
//         console.log(a)
//     }
//    return inner
// }
// let f1=outer();
// f1();
// let f2=outer();
// f2();

function giveIncrease(){
    let secret =10;
    return function increase(){
        secret++;
        console.log(secret)
    }
}
let f3=giveIncrease();

f3();
f3();
f3()

