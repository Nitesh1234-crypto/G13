import React from 'react'
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Profile from './component/Profile'
import Userlist from './component/Userlist'
import User from './component/User'
const App = () => {
  let navigate=useNavigate()
  function displayUserList(){
    navigate("/userlist")
  }
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/:username' element={<Profile></Profile>}></Route>
        <Route path='/userlist' >
            <Route index element={<Userlist></Userlist>}></Route>
            <Route path=':id' element={<User></User>}></Route>
        </Route>
      </Routes>
      <button onClick={displayUserList}>UserList</button>
      </div>
  )
}


export default App
