// import React, { useState } from 'react';
// import VehicleImage from './VehicleImage';
// import ColorSelection from './ColorSelection';
// import ProductDetails from './ProductDetails';
// import './Product.css';

// const SE03Max = () => {
//   const [selectedColor, setSelectedColor] = useState('Black');

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const productDetails = {
//     name: 'Rhyno SE03 Lite',
//     battery: '1.8 kWh',
//     batteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
//     chargingTime: '3 hours (12A)',
//     motor: '1500W',
//     maxSpeed: 55,
//     maxRange30: 100,
//     maxRange45: 90,
//     maxRangeFullSpeed: 70,
//     otherBenefits: ['Fire-safe Battery', 'Range prediction', 'Comfortable ride', 'Stable and safe'],
//   };

//   const availableColors = ['Black', 'Golden', 'Red', 'Blue'];

//   return (
//     <div className="product-container">
//       <h1>Rhyno SE03 Lite Electric Vehicle</h1>
//       <div className="images-and-details-container">
//         <div className="vehicle-image-container">
//           <VehicleImage color={selectedColor} />
//         </div>
//         <ColorSelection
//           colors={availableColors}
//           selectedColor={selectedColor}
//           onColorChange={handleColorChange}
//         />
//       </div>
//       <ProductDetails details={productDetails} />
//     </div>
//   );
// };

// export default SE03Max;
import React, { useState } from 'react';
import RhynoImage from './rhynoImage.png'; // Import your default vehicle image
import Rhyno_golden from './Rhyno_golden.png';
import Rhyno_red from './Rhyno_red.png';
import Rhyno_black from './Rhyno_black.png';
// VehicleImage component definition
const VehicleImage = ({ color }) => {
  const getImageUrl = (color) => {
    switch (color) {
      case 'Black':
        return Rhyno_black; // Adjust the image path based on your project setup
      case 'Red':
        return Rhyno_red;
      case 'Golden':
        return Rhyno_golden;
      default:
        return RhynoImage; // Default image path
    }
  };

  const imageUrl = getImageUrl(color);

  return (
    <div className="vehicle-image-container">
      <img src={imageUrl} alt={`Rhyno SE03 Max (${color})`} className="vehicle-image" />
      <p style={{ textAlign: 'center', marginTop: '10px' }}>Color: {color}</p>
    </div>
  );
};

// ColorSelection component definition
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
          {/* Text inside button (optional) */}
          {selectedColor === color ? '' : ''}
        </button>
      ))}
    </div>
  );
};

// ProductDetails component definition
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

// SE03Max component definition
const SE03Max = () => {
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
    <div className="product-container">
      <h1>Rhyno SE03 Lite Electric Vehicle</h1>
      <p className='para'> This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches.</p>
      <div className="images-and-details-container">
        <div className="vehicle-image-container">
          <VehicleImage color={selectedColor} />
        </div>
        <ColorSelection
          colors={availableColors}
          selectedColor={selectedColor}
          onColorChange={handleColorChange}
        />
      </div>
      <ProductDetails details={productDetails} />
    </div>
  );
};

export default SE03Max;
