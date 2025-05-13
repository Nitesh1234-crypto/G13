// console.log(a);
var a=10;
function outer(){
    console.log(a);
    var a=20;
    function inner(){
        a++;
        console.log(a);
        var a=30
    }
    console.log(inner())
    return 5
}
console.log(outer());






hello();
// function hello(){
//     console.log("hello world")
// }

var hello = function(){
    console.log("hello world")
}