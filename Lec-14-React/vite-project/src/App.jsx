import React from 'react'
import { useState,useEffect } from 'react';
function Child(){
  let a=5;
  let b =6;
}
const App = () => {
      return(
        <div>
          
        </div>
      )















  // let [users,setUsers]=useState(null);
  // useEffect(()=>{
  //   async function fetchUser(URL){
  //     let response=await fetch(URL);
  //     let userdata=await response.json();
  //     setUsers(userdata)
  //   }
  //   fetchUser("https://jsonplaceholder.typicode.com/users");
  // },[])

  // return (
  //   <div>
  //     {/* <User name={users[0].name} age={users[0].age}></User>
  //     <User name={users[1].name} age={users[1].age}></User>
  //     <User name={users[2].name} age={users[2].age}></User> */}
  //     {users && users.map((user,idx)=>{
  //         return <User key={user.id} name={user.name} email={user.email}></User>
  //     })}
  //   </div>
  // )
}
function User(props){
  return(
    <div>
      <h2>Name is {props.name} </h2>
      <h3>age is {props.email}</h3>
    </div>
  )

}


export default App
