import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid, faApple } from '@fortawesome/free-brands-svg-icons';
import './Rentals.css';

const Rentals = () => {
  return (
    <div className="rentals-container">
      <h1 className="rentals-heading">Rentals</h1>
      <div className="rental-section">
        <p className="rental-description">
          Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
        </p>
      </div>
      <div className="rental-section">
        <p className="rental-description">
          Additionally, we're redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
        </p>
        <div>
        <p className="rental-description">
        Download our rental app : 
        </p>
        </div>
        <div className="rental-app-buttons">
          <button className="app-button">
            <FontAwesomeIcon icon={faAndroid} className="app-icon" />
            Android
          </button>
          <button className="app-button">
            <FontAwesomeIcon icon={faApple} className="app-icon" />
            Apple
          </button>
        </div>
      </div>
    </div>
  );
}

export default Rentals;