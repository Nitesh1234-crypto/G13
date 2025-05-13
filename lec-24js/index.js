
// function fun(){
//     console.log(this)
// }
var name="Niteshfhgfh"
var obj={
    // name:"Nitesh",
    getName:function(arg1,arg2){
      console.log(this)
        let fn=()=>{
            console.log(this)
            console.log(this.name)
        }
        fn()
    }
}
obj.getName();

let obj2={
    foo:function(){

    },
     fun:()=>{
        console.log(this.name)
    }
}

obj2.fun();










// let obj2={
//     name:"Ritik"
// }
// obj.getName(); //this bind to object invoking the method
// fun();

//explicit
//1.call
// obj.getName.call(obj2,"apple","banana")
// fun.call(obj2,"a","b")
// //2.apply
// fun.apply(obj,["apple,banana"])
//3.bind
// obj.getName.call(obj2,"apple","banana")
// let f2=obj.getName.bind(obj2,"apple","banana");
// f2();



