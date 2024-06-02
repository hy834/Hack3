import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Provider.css';

const PrRegister = () => {
  const navigate = useNavigate();

  const handleGenerateID = () => {
    // Generate a unique ID (e.g., using a simple random number for demonstration)
    const uniqueID = 'ID-' + Math.floor(Math.random() * 1000000);
    document.getElementById('unique-e-id').value = uniqueID; // Updated to match the input field ID
  };

  const handleRegister = () => {
    // Handle registration logic here
    navigate('/provider-login'); // Navigate back to login after registration
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div className="input-container">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div className="input-container">
        <label htmlFor="age">Age:</label>
        <input type="number" id="age" name="age" />
      </div>
      <div className="input-container">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />
      </div>
      <div className="input-container">
        <label htmlFor="medical-organization">Medical Organization:</label>
        <input type="text" id="medical-organization" name="medical-organization" />
      </div>
      <div className="input-container">
        <label htmlFor="unique-e-id">Unique Employee ID:</label>
        <input type="text" id="unique-e-id" name="unique-e-id" readOnly />
        <button type="button" className="generate-button" onClick={handleGenerateID}>Generate</button>
      </div>
      <div className="buttons">
        <button type="button" className="register-button" onClick={handleRegister}>Register</button>
      </div>
      <div className="login-link">
        <Link to="/provider-login">Back to Login</Link>
      </div>
    </div>
  );
};

export default PrRegister;
