
import { useState } from 'react'
import './App.css'

function App() {
  let [value,setValue] = useState("click to generate random number")
  function random(){
    let random= Math.floor(Math.random()*10)
    setValue(random);
  }
return(
  <div>
      <h1>{value}</h1>
      <button onClick={random}>Click</button>
      {value==7? <h4>you win</h4>:<h4>You lost</h4>}
      {value==7? <img src='https://imgs.search.brave.com/H2fWuFPfy0BRElp5MGT9g9gvnhLeb-6tuJdlr7uhggY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQw/NTk1MTEzOS9waG90/by9jYXQtd2Vhcmlu/Zy1zdW1tZXItY2xv/dGhpbmcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUpjU0lE/RS1yVFhFZHVxLWlw/bEpqUzY2NzJ3OGEz/QWJhOTZoR2w5ZXJs/cW89'></img>:<img src='https://imgs.search.brave.com/zRK_L46ShcAPhv57crsMo_HPsM_1xzVO_lO24DTmHg8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTMx/NDg4ODg3MS9waG90/by9zaWxseS1jYXQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PVpqcE52M0ZNdUEw/TE5xdFRyaUtPQkxo/djIyQ3BZNTN0SDdm/Mm81TVM4bEE9'></img> }
      
  </div>
)

 
}
// let [color,setColor] = useState("black");
//  function chnageColour(){
//   let color=["red","blue","purple","pink","orange","green","yellow","brown","black","silver"]
//   let index=Math.floor(Math.random()*10);
//   let randomcolor= color[index];
//   setColor(randomcolor);
//  }
//    return(
//     <div>
//       <div style={{height:"100px",width:"100px",border:"1px solid black",background:color}}></div>
//       <button onClick={chnageColour}>Change color</button>
//     </div>
//    )

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
