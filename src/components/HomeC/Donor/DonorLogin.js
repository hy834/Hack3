

import React from 'react';
import { Link } from 'react-router-dom';
import './Donor.css';


const DonorLogin = () => {
  return (
    <div className="login-container">
      <h2>Donor Login</h2>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="input-container">
        <label htmlFor="id">Donor ID:</label>
        <input type="text" id="id" name="id" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="forgot-password-link">
        <Link to="/donor-forgot-password" >Forgot Password?</Link>
      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <Link to="/register" className="register-button">Register</Link>
      </div>
    </div>
  );
};

export default DonorLogin;
