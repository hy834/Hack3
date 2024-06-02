import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Extra.css'; // Ensure you create this CSS file for styling

const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="navbar-link"> {/* Link home to the root URL */}
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScJCh0Lw1XggX9f86GtAGtDveNWXAche5CiA&s" alt="Logo" className="navbar-logo" />
          <span className="navbar-brand">PlanPal</span>
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-link">Home</Link> {/* Keep the "Home" link */}
        <Link to="/about" className="navbar-link">About</Link> {/* Link about to About.js */}
        <Link to="/contact" className="navbar-link">Contact</Link> {/* Link contact to Contact.js */}
        <Link to="/emergency" className="navbar-link">Emergency</Link> {/* Link emergency to Emergency.js */}
      </div>
    </nav>
  );
};

export default Header;
