import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'

const TodoList = () => {
    let todos=useSelector((store)=>store.todo.todos)
  return (
    <div>
      {
        todos.map((todo)=>{
            return <Todo key={todo.id} id={todo.id} title={todo.title}></Todo>
        })
      }
    </div>
  )
}

export default TodoList
