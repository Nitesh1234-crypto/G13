import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/Todo/todoSlice'

const TodoInput = () => {
    let [titleInput,setTitleInput]=useState("")
    let dispatch=useDispatch()
  return (
    <div>
      <input type="text" value={titleInput} placeholder='Enter title' onChange={(e)=>setTitleInput(e.target.value)} />
      <button onClick={()=>{
        dispatch(addTodo(titleInput))
        setTitleInput("")
      }}>Add todo</button>
    </div>
  )
}

export default TodoInput
