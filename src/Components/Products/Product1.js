import React, { useState } from 'react';
import "./Product.css";


const VehicleImage = ({ color }) => {
  const getImageUrl = (color) => {
    switch (color) {
      case 'Black':
        return '/Images/Rhyno_black.png';
      case 'Red':
        return '/Images/Rhyno_red.png';
      case 'Golden':
        return '/Images/Rhyno_golden.png';
      default:
        return '/Images/rhynoImage.png';
    }
  };

  const imageUrl = getImageUrl(color);

  return (
    <div className="vehicle-image-container">
      <img src={imageUrl} alt={`Rhyno SE03 Lite (${color})`} className="vehicle-image" />
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Color: {color}</p>
    </div>
  );
};


const ColorSelection = ({ colors, selectedColor, onColorChange }) => {
  return (
    <div className="color-selection-container">
      {colors.map((color) => (
        <button
          key={color}
          className={`color-button ${selectedColor === color ? 'selected' : ''}`}
          style={{ backgroundColor: color.toLowerCase() }}
          onClick={() => onColorChange(color)}
          disabled={selectedColor === color}
        >
          {selectedColor === color ? '' : ''}
        </button>
      ))}
    </div>
  );
};


const ProductDetails = ({ details }) => {
  return (
    <div className="product-details">
      <h2>{details.name}</h2>
      <p><strong>Battery:</strong> {details.battery}</p>
      <p><strong>Battery Features:</strong> {details.batteryFeatures}</p>
      <p><strong>Charging Time:</strong> {details.chargingTime}</p>
      <p><strong>Motor:</strong> {details.motor}</p>
      <p><strong>Max Speed:</strong> {details.maxSpeed} km/h</p>
      <p><strong>Max Range (@30km/h):</strong> {details.maxRange30} km</p>
      <p><strong>Max Range (@45km/h):</strong> {details.maxRange45} km</p>
      <p><strong>Max Range (Full Speed):</strong> {details.maxRangeFullSpeed} km</p>
      <p><strong>Other Key Benefits:</strong></p>
      <ul>
        {details.otherBenefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
};


const Product1 = () => {
  const [selectedColor, setSelectedColor] = useState('Black');

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const productDetails = {
    name: 'Rhyno SE03 Lite',
    battery: '1.8 kWh',
    batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
    chargingTime: '3 hours (12A)',
    motor: '1500W',
    maxSpeed: 55,
    maxRange30: 100,
    maxRange45: 90,
    maxRangeFullSpeed: 70,
    otherBenefits: ['Fire-safe Battery', 'Range prediction', 'Comfortable ride', 'Stable and safe'],
  };

  const availableColors = ['Black', 'Golden', 'Red', 'Blue'];

  return (
    <div className='whole'>
      <div className="product-container">
        <h1>Rhyno SE03 Lite EV</h1>
        <div className="images-and-details-container">
          <VehicleImage color={selectedColor} />
          <ColorSelection
            colors={availableColors}
            selectedColor={selectedColor}
            onColorChange={handleColorChange}
          />
        </div>
        <ProductDetails details={productDetails} />
      </div>
    </div>
  );
};

export default Product1;