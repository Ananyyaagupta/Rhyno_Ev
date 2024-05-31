// Contact.js

import React from 'react';
import './Contact.css'; 

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className='information'>
        <div>
      <div className="contact-item">
        <div className="contact-item-content">
          <h2>Mail id:</h2>
          <p>info@rhyno.in</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-item-content">
          <h2>Phone no:</h2>
          <p>+91-9023987528</p>
        </div>
      </div>
      <div className="contact-item">
        <div className="contact-item-content">
          <h2>Location:</h2>
          <p>
            Rhyno Wheels Private limited, <br />
            Near UG hostel gate #2, 
            Behind PDEU, Raisan, <br />
            Gandhinagar, Gujarat, India.
          </p>
        </div>
        </div>
      </div>
      
      <div className="contact-image">
        <img src="Images\contact.jpeg" alt="Person" style={{ borderRadius: '50%' }} />
      </div>
      </div>
    </div>
  );
}

export default Contact;