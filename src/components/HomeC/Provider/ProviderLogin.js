import React from 'react';
import { Link } from 'react-router-dom';
import './Provider.css'; // Assuming you have a CSS file for styling

const ProviderLogin = () => {
  return (
    <div className="login-container">
      <h2>Provider Login</h2>
      <div className="input-container">
        <label htmlFor="id">Employee ID:</label>
        <input type="text" id="id" name="id" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="forgot-password-link">
        <Link to="/provider-forgot-password">Forgot Password?</Link>
      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <Link to="/provider-register" className="register-button">Register</Link>
      </div>
    </div>
  );
};

export default ProviderLogin;
