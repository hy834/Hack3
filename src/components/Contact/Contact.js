import React from 'react';
import './Contact.css'; // Import the new CSS file

function Contact() {
  return (
    <div className="body-contact">
      <div className="container-contact">
        <h2 className="heading-contact">Contact Us</h2>
        <div className="contactInfo-contact">
          <h3 className="subHeading-contact">Our Location</h3>
          <p>123 Green Avenue, Raj Nagar,</p>
          <p>New Delhi, India</p>

          <h3 className="subHeading-contact">Email</h3>
          <p>suresh_kumar@gmail.com</p>

          <h3 className="subHeading-contact">Phone</h3>
          <p>+91 98765 43210</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
