import React from 'react';
import './About.css';


const About = () => {
  return (
    <div>
      
    <div className="about-container">
        <h1 className="about-heading">About Us</h1>
      <div className="about-section">
      
        <p className="about-description">
          Established in 2019 by an automotive engineer with a vision for sustainable and robust mobility solutions, Rhyno EV is not just a company; it's a collective effort of a dynamic team of young individuals passionately driving innovation in the electric vehicle industry. We believe in engineering solutions that solve problems.
        </p>
        <img src="Images\Copy of grp.png" alt="About Us 1" className="about-img" />
      </div>
      <div className="about-section">
        <img src="Images\about.jpeg" alt="About Us 2" className="about-img" />
        <p className="about-description">
          With our first product, we've taken a bold step to create something more than just a vehicle; it's a unique experience of elegance, comfort, and style, addressing the pitfalls of conventional electric scooters. Our design prioritizes safety, eliminating concerns of fires and ensuring a longer battery lifespan with our battery technology. Perfectly suited for fleet operators, especially in tourist-centric locations like Goa, our rugged yet aesthetically appealing scooters are engineered for longevity and reliability.
        </p>
      </div>
    </div>
   
    </div>
  );
}

export default About;