import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaCity, FaKey } from 'react-icons/fa';

const SignupComponent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneno: '',
    city: '',
  });

  const [passwordError, setPasswordError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate password and confirm password
    if (name === 'password' || name === 'confirmPassword') {
      if (formData.password !== formData.confirmPassword) {
        setPasswordError('Passwords do not match');
      } else {
        setPasswordError('');
      }
    }

    // Validate email
    if (name === 'email' && !passwordError) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
    }

    // Validate phone number
    if (name === 'phoneno' && !passwordError) {
      const phoneRegex = /^[0-9]{10}$/;
      setPhoneError(phoneRegex.test(value) ? '' : 'Invalid phone number');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and phone number are valid
    if (emailError || phoneError) {
      return;
    }

    // Add your signup logic here
    console.log('Form submitted:', formData);

    // Navigate to login component after successful signup
    navigate('/Login');
  };

  return (
    <div style={{ height: '240px', marginLeft: '100px' }}>
      <div className='container' style={{ backgroundColor: 'lightblue', marginTop: '20px' }}>
        <h5></h5>
        <h2 className="mb-4" style={{ marginLeft: '150px',paddingTop:'30px' }}>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginTop: '10px' }} className="mb-3">
            <label htmlFor="name" className="form-label">
              <FaUser /> User Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
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
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              <FaLock /> Password
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
            <label htmlFor="confirmPassword" className="form-label">
              <FaLock /> Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            {/* {passwordError && <div className="text-danger">{passwordError}</div>} */}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneno" className="form-label">
              <FaPhone /> Phone no
            </label>
            <input
              type="number"
              className="form-control"
              id="phoneno"
              name="phoneno"
              value={formData.phoneno}
              onChange={handleChange}
              required
            />
            {phoneError && <div className="text-danger">{phoneError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="city" className="form-label">
              <FaCity /> city
            </label>
            <input
              type="text"
              className="form-control"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="security" className="form-label">
              <FaKey /> Security Question: What is your first school name?
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
          </div>
          <button style={{ marginLeft: '130px' }} type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <p className="mt-3">
            Already have an account? <Link to="/Login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignupComponent;
