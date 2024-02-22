import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaKey } from 'react-icons/fa';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    security: '',
    password: '',
    confirmpassword: ''
  });

  // const [passwordMatchError, setPasswordMatchError] = useState('');
  // const [securityMatchError, setSecurityMatchError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === 'password' || name === 'confirmpassword') {
      if (formData.password !== formData.confirmpassword) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }
  };

    // Check if security matches
    // if (name === 'security') {
    //   // Assuming you have stored the security text during signup in a variable called signupSecurityText
    //   const signupSecurityText = 'YourSignupSecurityTextHere';
    //   if (value !== signupSecurityText) {
    //     setSecurityMatchError('Security answer is incorrect');
    //   } else {
    //     setSecurityMatchError('');
    //   }
    // }
  

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    // if (formData.password !== formData.confirmpassword) {
    //   setPasswordMatchError('Passwords do not match');
    //   return;
    // }

    // Check if security matches
    // Assuming you have stored the security text during signup in a variable called signupSecurityText
    // const signupSecurityText = 'YourSignupSecurityTextHere';
    // if (formData.security !== signupSecurityText) {
    //   setSecurityMatchError('Security answer is incorrect');
    //   return;
    // }


    if (formData.password !== formData.confirmpassword) {
      setPasswordError('Passwords do not match');
      return;
    }
    // Add your login logic here
    console.log('Form submitted:', formData);

    // Navigate to the login component after successful form submission
    navigate('/LoginComponent');
  };

  return (
    <div className="container" style={{paddingLeft:'40px', backgroundColor: 'lightblue', height: '500px', marginLeft: "30px" }}>
      {/* <div className='log' style={{ marginTop: '130px', }}> */}
      
        <h2 className="mb-4" style={{ marginLeft: '120px',marginTop:'20px',paddingTop:'20px' }}>Reset password</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              <FaEnvelope /> Email address
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
              <FaLock /> New Password
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
          <div className="mb-3">
            <label htmlFor="confirmpassword" className="form-label">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmpassword"
              name="confirmpassword"
              value={formData.confirmpassword}
              onChange={handleChange}
              required
            />
            {/* {passwordMatchError && <div className="text-danger">{passwordMatchError}</div>} */}
          </div>

          <div className="mb-3">
            <label htmlFor="security" className="form-label">
              <FaKey /> What is your primary school name?
            </label>
            <input
              type="text"
              className="form-control"
              id="security"
              name="security"
              value={formData.security}
              onChange={handleChange}
              required
            />
            {/* {securityMatchError && <div className="text-danger">{securityMatchError}</div>} */}
          </div>

          <button style={{ marginLeft: '200px' }} type="submit" className="btn btn-primary">
            Reset
          </button>

        </form>
      </div>
    // </div>
  );
};

export default ForgotPassword;
