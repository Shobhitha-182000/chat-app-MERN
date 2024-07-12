import { useState } from 'react'
import {Router,BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import Signup from './components/Signup'

function App() {
 

  return (
    <BrowserRouter>
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    </BrowserRouter>
    
      
  )
}

export default App
