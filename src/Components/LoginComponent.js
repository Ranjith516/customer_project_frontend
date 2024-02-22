

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const LoginComponent = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="container " style={{backgroundColor:'lightblue',height:'430px',marginLeft:'50px'}}>
        <div className='log' style={{marginTop:'0px',marginLeft:"50px"}}>
      <h2 className="mb-4" style={{marginLeft:'120px',paddingTop:'30px'}}>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            <FaEnvelope/> Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
           <FaLock/> Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <p style={{marginLeft:'310px'}}>
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </p>
        <button style={{marginLeft:'120px'}} type="submit" className="btn btn-primary">
          Login
        </button>
        <p><br></br></p>
        <p className="mt-3">
          Don't have an account? <Link to="/Signup">Sign Up</Link>
        </p>
        
      </form>
      </div>
    </div>
  );
};

export default LoginComponent;

