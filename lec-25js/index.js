


// let obj= {
//     name:"Nitesh"
// }
// console.log(obj)
// obj.toString();

// let arr=["1","2","3","5"];
// console.log(arr.toString())
// console.log(arr);


function Person(name,age){ //javascript provide a prototype for each contructor function which is an object
   this.name=name;
   this.age=age;
   this.getname= function(){
    console.log(this.name)
   }
}
// console.log(Person.prototype)
Person.prototype.getage= function(){
   return this.age
}
// console.log(Person.prototype)
let p1= new Person("Nitesh","23");
let p2= new Person("Ritik","25");

console.log(p1.__proto__.__proto__.__proto__)

// console.log(p1.__proto__ ==Person.prototype)
// // console.log(p1);
// // console.log(p2);

// let str=new String("abc");
// String.prototype.__proto__=Array.prototype;
// console.log(str)
// // str.push();


let obj1={
    a:10
}
obj1.__proto__=null
// let obj2={
//     b:20
// }
// obj1.__proto__=obj2
console.log(obj1)