
import { useEffect,useState } from 'react'
import './App.css'

// function App() {
//   let [count,setCount] = useState(0);
//   let [condition,setCondition] = useState(false);
//   function chnagecount(){
//     setCount(count+1);
//     if(count%10==0){
//       console.log("hi");
//       setCondition(!condition);
//     }
   
//   }
  

//   // useEffect(()=>{
//   //   console.log("hello world")
//   // })
//   // useEffect(()=>{
//   //   console.log("hello world")
//   // },[])
//   useEffect(()=>{
//     console.log("chnage tyre")
    
//   },[condition])

//   return (
//     <div>
//        <h1>useEffect</h1>
//        <button onClick={chnagecount}>Chnage state</button>
//     </div>
//   )
// }
import React from 'react'

const App = () => {
  let [time,setTime]=useState(0)
  useEffect(()=>{
    let id=setInterval(()=>{
      setTime((t)=>t+1); //using callback provide the updated state value
    },1000)
    return ()=>{clearInterval(id)} //cleanup function
  },[])
  
  return (
    <div>
      <h1>{time}</h1>
    </div>
  )
}



export default App
