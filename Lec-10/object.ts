interface User{
    username:string,
    age:number
}
let user:User={
    username:"Nitesh",
    age:23
}
console.log(user.username)
// user.age="45"
user.age=45;


let num:number[] =[1,2,]

num[3] =45;

let numstr:number[] | string[] =[] ;
numstr[0]=1;
numstr[1]="10"
// console.log(numstr[4]);


interface Emp{
    id:number,
    ename:string,
    salary:number,
    dep:string,
    getName():string

    
}
interface Emp2{
    id:number,
    ename:string,
    salary:number,
    dep:string,
    getsalary():number
}
let emp:Emp ={
    id:1,
    ename:"ritik",
    salary:200000,
    dep:"IT",
    getName:function() {
        return this.ename
    },
}
let emp3:Emp ={
    id:3,
    ename:"riti",
    salary:20000,
    dep:"IT",
    getName:function() {
        return this.ename
    },
}
let emp2:Emp2={
    id:1,
    ename:"ritik",
    salary:200000,
    dep:"IT",
    getsalary:function(){
        return this.salary
    }

}

function empname(em:Emp){
    return em.getName
}

// empname("heloo")
empname(emp)


//array of object


// let employe:Emp[]=[emp,emp3]

interface User2{
    id:number,
    email:string,
    password:string
}

let users:User2[] =[
    {
        id:1,
        email:"sfdfsdf",
        password:"1234"
    },
    {
        id:1,
        email:"sfdfsdf",
        password:"1234"
    },
    {
        id:1,
        email:"sfdfsdf",
        password:"1234"
    }

]
// OR |


let some:number | string;


