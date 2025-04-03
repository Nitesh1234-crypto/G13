import React, { useEffect, useState } from 'react'
import User from './User'
import { Link, Outlet } from 'react-router-dom'
import Header from './Header'

const Userlist = () => {
    let [users,setUsers] = useState([])
    useEffect(()=>{
        console.log("hi")
        async function fetchUser(URL){
            let response= await fetch(URL)
            let data= await response.json();
            setUsers(data);
        }
        fetchUser(`https://jsonplaceholder.typicode.com/users/`)
    },[])
  return (
    <div>
         <Header></Header>
      {
        users.map((user)=>{
           return(
            <div>
            <Link to={user.id.toString()}>{user.name}</Link>
            </div>
           )
        })
      }
     
     
     
      <Outlet></Outlet>

    </div>
  )
}

export default Userlist
