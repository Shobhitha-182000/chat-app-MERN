import React, { useState } from 'react';
import axios from 'axios';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  

const Signup = () => {
 
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate=useNavigate();

  

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profilePic: e.target.files[0],
    });
  };

  const formHandler = (e) => {
    e.preventDefault();

    

    axios.post('http://localhost:3000/user/signup', {name,email,password})
      .then(response => {
        console.log(response);
        toast.success('Successfully signed up!');
      navigate('/login')
      })
      .catch(error => {
        console.log('error is '+error);
      });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={formHandler}>
        <h2>Signup</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="profilePic">Choose a Profile Pic</label>
          <input
            type="file"
            id="profilePic"
            name="profilePic"
            onChange={handleFileChange}
            required
          />
        </div> */}
        <button type="submit">Signup</button>
        <Link
          to="/login"
          className="block text-sm text-center text-red-600 hover:underline hover:text-blue-600 mt-4"
        >
          Already have an account?
        </Link>
      </form>
      
    </div>
  );
};

export default Signup;
