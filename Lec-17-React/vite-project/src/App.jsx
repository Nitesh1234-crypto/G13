import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Profile from './component/Profile'
const App = () => {
  return (

    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/:username' element={<Profile></Profile>}></Route>
      </Routes>
      </BrowserRouter>
 
  )
}


export default App
