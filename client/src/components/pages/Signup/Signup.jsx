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
    <div className="register-container">
    
    <h2 className="register-title">Register</h2>
    <form onSubmit={formHandler}>
        <div>
            <label htmlFor="username">User name:</label>
            <input type="text" id="username" name="username" value={name} onChange={(e)=>setName(e.target.value)} className="register-form-input" required />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={ email} onChange={(e)=>setEmail(e.target.value)} className="register-form-input" required />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={ password} onChange={(e)=>setPassword(e.target.value)} className="register-form-input" required />
        </div>
        <div>
            {/* <label>Select :</label>
             <select name='name'>
                <option value="admin" className='option'>Admin</option>
                <option value="admin" className='option'>Customer</option>
             </select> */}
        </div>
        <button type="submit" className="register-submit">Register</button>
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