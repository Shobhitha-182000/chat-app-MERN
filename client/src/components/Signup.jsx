import React, { useState } from 'react'
import './Signup.css'

const Signup = () => {
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        profilePic:''
    });
     const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value
        })
     }
     const handleFileChange=(e)=>{
        
        setFormData({
            ...formData,
            profilePic:e.target.files[0]
        })
     }

     const formHandler=(e)=>{
        e.preventDefault();
         alert(formData.name);
     }

  return (
    <div className="signup-container">
    <form className="signup-form" onSubmit={formHandler}>
      <h2>Signup</h2>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password"  value={formData.password} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="profilePic">Choose a Profie Pic</label>
        <input type="file" id="profilePic" name="profilePic"  onChange={handleFileChange} required />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
  )
}

export default Signup
