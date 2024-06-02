import React from 'react';
import { Link } from 'react-router-dom';
import './Patient.css';

const PForgotPassword = () => {

    const handleResetPassword = () => {
        // Add your reset password logic here
        alert('Reset Successful!');
      };
  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <p>Please enter your email address below. We will send you a link to reset your password.</p>
      <div className="input-container">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <button className="reset-button" onClick={handleResetPassword}>Reset Password</button>
      <div className="back-to-login">
        <Link to="/login">Back to Patient Login</Link>
      </div>
    </div>
  );
};

export default PForgotPassword;
