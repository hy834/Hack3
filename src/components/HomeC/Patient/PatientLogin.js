import React from 'react';
import { Link } from 'react-router-dom';
import './Patient.css';

const PatientLogin = () => {
  return (
    <div className="login-container">
      <h2 className='textchange'>Patient Login</h2>
      <div className="input-container">
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" />
      </div>
      <div className="input-container">
        <label htmlFor="id">Patient ID:</label>
        <input type="text" id="id" name="id" />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="forgot-password">
        <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
      </div>
      <div className="buttons">
        <button className="login-button">Login</button>
        <Link to="/patient-register" className="register-button">Register</Link>
      </div>
    </div>
  );
};

export default PatientLogin;
