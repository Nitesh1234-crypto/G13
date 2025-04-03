import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const User = (props) => {
    let [user,setUser] = useState(null)

    let {id} = useParams()
    id= Number(id)
    // https://jsonplaceholder.typicode.com/users/id
    useEffect(()=>{
        console.log("hi")
        async function fetchUser(URL){
            let response= await fetch(URL)
            let data= await response.json();
            setUser(data);
        }
        fetchUser(`https://jsonplaceholder.typicode.com/users/${id}`)
    },[id])
  return (
    // <div>
    //  <span>username : {props.username}</span>
    //  <span>email : {props.email}</span>
    // </div>
    <div>
        {/* <h1> User is {id} </h1> */}
        {user && 
        <div>
            <h2>username is {user.username}</h2>
            <h2>email is {user.email}</h2>
        </div>
        }
    </div>
  )
}

export default User
