import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser } from './userSlice'

const User = () => {
    let {users,status,error} = useSelector((store)=>store.user);
    let dispatch= useDispatch()
    useEffect(()=>{
        dispatch(fetchUser())
    },[])
    if(status=="pending"){
        return <h1>Loading ....</h1>
    }
    if(status=="error"){
        return <h1>error is {error}</h1>
    }
    if(status=="success"){
        return (
            <div>
              {
                users.map((user)=>{
                    return <h1>{user.username}</h1>
                })
              }
            </div>
          )
    }
  
}

export default User
