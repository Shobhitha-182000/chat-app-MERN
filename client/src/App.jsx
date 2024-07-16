import { useState } from 'react'
import {Router,BrowserRouter,Routes, Route} from 'react-router-dom'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import { ToastContainer  } from 'react-toastify';
import Home from './components/pages/Home';
import './index.css';

function App() {
 

  return (
    <BrowserRouter>
     <ToastContainer/>
     <div className="min-h-screen flex items-center justify-center">
    <Routes>
    <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
    
    </BrowserRouter>
       
  )
}

export default App
