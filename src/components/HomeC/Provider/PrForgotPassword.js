import React from 'react';
import { Link } from 'react-router-dom';
import './Provider.css'; // Assuming you have a CSS file for styling

const PrForgotPassword = () => {
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address below. We will send you a link to reset your password.</p>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <button className="reset-button">Reset Password</button>
      <div className="back-to-login">
        <Link to="/provider-login">Back to Provider Login</Link>
      </div>
    </div>
  );
};

export default PrForgotPassword;
