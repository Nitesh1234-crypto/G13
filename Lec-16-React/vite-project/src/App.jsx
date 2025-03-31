import React from 'react'
import { createContext } from 'react'
import { useContext } from 'react';
const dataContext = createContext(0);
const App = () => {
  let data =5;
  return (
    <div>
      <h1>App component</h1>
      <dataContext.Provider value={data}>
          <Child1></Child1>
      </dataContext.Provider>
    </div>
  )
}
function Child1(){
  return(
    <div>
      <h1>Child One</h1>
      <Child2></Child2>
    </div>
  )
}
function Child2(){
  
  return(
    <div>
      <h1>Child Two</h1>
      <Child3></Child3>
      
    </div>
  )
}
function Child3(){
  const value = useContext(dataContext)
  return(
    <div>
      <h1>Child Three</h1>
      <h4>Data is {value}</h4>
    </div>
  )
}

export default App








import React, { useState } from 'react';
import { memo } from 'react';

const App = () => {
  let [value,setValue] = useState(0)
  console.log("hi")
  return (
    <div>
      <button onClick={()=>setValue(value+1)}>Chnage state</button>
      <Child1></Child1>
      <Child2></Child2>
      <Child3></Child3>
    </div>
  )
}
let Child1=memo(function Child1(props){
  console.log("child 1")
  return(
    <div>
      <h1>Child One</h1>
      
    </div>
  )
})
let Child2=memo(function Child2(props){
  console.log("child 2")
  return(
    <div>
      <h1>Child Two</h1>
      
      
    </div>
  )
})
let Child3=memo(function(props){
  console.log("child 3")
  return(
    <div>
      <h1>Child Three</h1>
    </div>
  )
})



export default App

