// import React from 'react'
// import { useState } from 'react';
// const App = () => {
//   let [cValue, setCvalue] = useState(null);
//   function  getDataformChild(cdata){
//      console.log(cdata);
//      setCvalue(cdata);
//   }
//   return (
//     <div>
//       <h1>App component</h1>
//       {cValue && <h4>{cValue}</h4>}
//       <Childcomponent fn={getDataformChild}></Childcomponent>
//     </div>
//   )
// }

// function Childcomponent(props){
//   let fn= props.fn;
//   let data = 10
//   return(
//     <div>
//       <h1>Child component</h1>
//       <p>{data}</p>
//       <button onClick={()=>fn(data)}>Give data</button>
//     </div>
//   )
// }

// export default App
import React from 'react'
import { useState } from 'react'

const App = () => {
  let [todos,setTodos] =useState([{id:"1",title:"sfdsfsdf",desc:"sdsfsdfds"}])
  function addTodo(title,desc){
    console.log(title,desc);
    let newtodo={id:Math.random(),title:title,desc:desc};
    // todos=todos.push(newtodo);
    // setTodos(todos)
    let changeTodos=[...todos];
    changeTodos.push(newtodo);
    setTodos(changeTodos);
  }
  return (
    <div>
      <h1>Todo application</h1>
      <TodoInput addTodo={addTodo}></TodoInput>
      <Todolist todos={todos}></Todolist>
    </div>
  )
}
function TodoInput(props){
  let addTodo= props.addTodo;
  let [title,setTitle]= useState("");
  let [desc,setDesc] = useState("");
  function titleChangeHandler(value){
      setTitle(value);
  }
  function descChnageHandler(value){
      setDesc(value)
  }
  function formsubmitHandler(e){
    e.preventDefault();
    addTodo(title,desc)
    setTitle("");
    setDesc("");

  }
  return(
    <form action="" onSubmit={formsubmitHandler}>
      <input type="text" placeholder='Enter todo title' onChange={(e)=>titleChangeHandler(e.target.value)}/>
      <input type="text" placeholder='Enter todo description' onChange={(e)=>descChnageHandler(e.target.value)} />
      <button>Add</button>
    </form>
  )
}
function Todolist(props){
  let todos=props.todos;
  return(
    <div>
      <ul>
        {todos.map((todo)=>{
          return <TodoComponent key={todo.id} title={todo.title} desc={todo.desc}></TodoComponent>
        })}
      </ul>
    </div>
  )
}
function TodoComponent(props){
  return(
    <li>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  )
}

export default App














