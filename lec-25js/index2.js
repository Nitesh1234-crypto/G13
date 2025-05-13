let obj={
    a:10,
    b:20
}
console.log(obj.toString())
obj.c=30
console.log(obj);

function Person(name,age){
    this.name=name;
    this.age=age;
    // this.getname=function(){
    //     return this.name;
    // }
    
}
Person.prototype.getname=function(){
    return this.name;
}
// console.log(Person.prototype)
let p1= new Person("Nitesh","23");
let p2= new Person("Ritik","25");
console.log(p1)
// console.log(p2.getname())

// console.log(p1);
// console.log(p2)

let obj2={
    a:30,
    b:60
}
console.log(obj2.toString());

let arr=["1","2","3"]
let str = new String("abc")
console.log(arr.__proto__.__proto__.__proto__);
console.log(str)
