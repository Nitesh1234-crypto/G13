import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo } from '../features/Todo/todoSlice';

const Todo = (props) => {
    let dispatch = useDispatch();
  return (
    <div>
      <span>{props.title}</span>
      <button onClick={()=>dispatch(deleteTodo(props.id))}>❌</button>
    </div>
  )
}

export default Todo
