import React, { useState } from 'react';
import './Register.css';
import { Link } from 'react-router-dom';

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your registration logic here, such as sending data to a server
    console.log('Form submitted with data:', formData);
  };

  return (
    <div className="register-form-container">
      <h2 className="register-heading">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="register-input"
            required
          />
        </div>
        <div className="register-button-container">
          <button type="submit" className="register-button">Register</button>
        </div>
      </form>
      <p className="already-have-account">Already have an account? <Link to="/" className="register-link">Log In</Link></p>
    </div>
  );
}

export default RegisterForm;
