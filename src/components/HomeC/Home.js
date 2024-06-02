import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'; // Assuming you have a Home.css for styling

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <div className="home">
      <div className="welcome-text">
        <h1>Welcome to PlanPal!</h1>
        <p>Your health is our priority </p>
      </div>
      <div className="container-boxes">
        <button className="container-box" onClick={() => handleLogin('/patient')}>
          <img src="pat3.jpeg" alt="Patient" className="container-image" />
          <h2>Patient</h2>
        </button>
        <button className="container-box" onClick={() => handleLogin('/provider')}>
          <img src="prov.jpeg" alt="Provider" className="container-image" />
          <h2>Provider</h2>
        </button>
        <button className="container-box" onClick={() => handleLogin('/donor')}>
          <img src="donor.jpeg" alt="Donor" className="container-image" />
          <h2>Donor</h2>
        </button>
      </div>
    </div>
  );
};

export default Home;
