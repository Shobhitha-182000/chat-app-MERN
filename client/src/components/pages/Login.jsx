import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
// import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';  
const Login = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

const navigate=useNavigate();

  const formHandler=(e)=>{
    e.preventDefault();
     axios.post('http://localhost:3000/user/login',{email,password})
     .then(response=>{
      console.log(response)
      toast.success('Successfully loggin!');
      navigate('/home')

     })
     .catch(error=>{
      
      toast.error('Error: ' + (error.response ? error.response.data.message : error.message));
     })
  }

 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 rounded-lg shadow-md bg-white">
        <h1 className="text-3xl font-semibold text-center text-gray-800">
          Login
        </h1>
        <form className="mt-4" onSubmit={formHandler}>
          <div className="form-group mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="email"
              value={ email}
              onChange={ (e)=>setEmail(e.target.value)}
              required
              aria-label="Email"
            />
          </div>
          <div className="form-group mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              name="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
              aria-label="Password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
          >
            Login
          </button>
        </form>
        <Link
          to="/signup"
          className="block text-sm text-center text-blue-500 hover:underline hover:text-blue-600 mt-4"
        >
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
