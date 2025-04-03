import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
    let {username}=useParams();
    console.log(username)
    //Fetch data of username from server
  return (
    <div>
      <h1>Profile page of {username}</h1>
    </div>
  )
}

export default Profile
