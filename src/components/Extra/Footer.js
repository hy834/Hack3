import React from 'react';
import './Extra.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="section">
                    <h4>Hospital Information</h4>
                    <p>Community Health Record Management System</p>
                    <p>123, Green Avenue, Raj Nagar, New Delhi, India</p>
                </div>
                <div className="section">
                    <h4>Contact Information</h4>
                    <p>Email: suresh.kumar@gmail.com</p>
                    <p>Phone: +91 98765 43210</p>
                </div>
                <div className="section">
                    <h4>Quick Links</h4>
                    <p><a href="/">Home</a></p>
                    <p><a href="/about">About</a></p>
                    <p><a href="/contact">Contact</a></p>
                    <p><a href="/emergency">Emergency</a></p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;