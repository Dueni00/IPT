import React, { useState } from 'react';
import './forgot.css'; // Import your CSS file
import { Link } from 'react-router-dom';

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send reset password link to the provided email
    console.log("Email Address:", email);
    // Reset the email field after submission if needed
    setEmail('');
  };

  return (
    <div className="container">
      <h2 className="heading">Forgot Password</h2>
      <input
        className="input"
        type="email"
        placeholder="Enter Email Address"
        value={email}
        onChange={handleChange}
      />
      <button
        className="button confirm"
        type="submit"
        onClick={handleSubmit}
      >
        Send Reset Link
      </button>
      <Link to="/" className="back-to-login">
        Back to Log In
      </Link>
    </div>
  );
};

export default ForgotPasswordForm;
