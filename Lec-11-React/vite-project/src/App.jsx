
import { useState } from 'react'
import './App.css'

function App() {
  let [count,setCount]=useState(0)
  // let count=0
 function increase(){
    setCount(count+1)
 }
   return(
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>Click</button>
    </div>
   )

 
}

// function Parent(){

//   return(
//     <div>
//       <h1>Parent</h1>
//       <Child Name="Nitesh" age="23"></Child>
//     </div>
//   )
// }
// function Child(p){
//   return (
//     <div>
     
//       <h1>Child</h1>
//       <h3>Name : {p.Name}</h3>
//       <h4>age: {p.age}</h4>
//     </div>
//   )
// }

export default App
