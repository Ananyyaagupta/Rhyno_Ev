// import React, { useState, useEffect } from "react";
// import "./Home.css";
// import Navbar from "./Navbar";

// const images = ["bike.png", "black.png", "blue.png"];
// const words = ["Elegance", "Minimalism", "Comfort"];

// export default function App() {
//   const [index, setIndex] = useState(0);
//   const [wordIndex, setWordIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % images.length);
//       setWordIndex((prevIndex) => (prevIndex + 1) % words.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="full-height">
//       <Navbar />
//       <div className="container">
//         <div className="left-panel">
//           <div className="front-line">
//             <p>
//               Let's Elevate Your Ride Experience With Rhyno – Where Superiority
//               Meets <span className="dynamic-word">{words[wordIndex]}</span>.
//             </p>
//           </div>
//         </div>
//         <div className="right-panel">
//           <div className="vehicle-photos">
//             {images.map((image, idx) => (
//               <div key={idx} className={`slide ${idx === index ? "active" : ""}`}>
//                 <img src={`/Images/${image}`} alt={`Vehicle ${idx + 1}`} />
//                 <button className="checkout-button">Checkout</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';

import './Compare.css';

const VehicleComparison = ({ vehicleName, specifications }) => {
  return (
    <div className="vehicle-comparison">
      <h2>{vehicleName}</h2>
      <div className="specifications">
        {Object.entries(specifications).map(([key, value]) => (
          <div key={key} className="spec-item">
            <span className="spec-label">{key}</span>
            <span className="spec-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const ImageSlideshow = () => {
  return (
    <div className="image-slideshow">
      <img src="\Images\Rhyno_black.png" alt="Rhyno_black" />
      <img src="\Images\Rhyno_golden.png" alt="Rhyno_golden" />
      <img src="\Images\Rhyno_red.png" alt="rhynoImage" />
    </div>
  );
};

const Compare = () => {
  return (
    <div className="whole">
      <div className="comparison-page">
        <ImageSlideshow />
        <div className="comparison-container">
          <VehicleComparison
            vehicleName="Rhyno SE03"
            specifications={{
              Battery: '2.7 kWh',
              BatteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
              Motor: '2000W',
              MaxSpeed: '65 km/h',
              MaxRange30: '120 km',
              MaxRange45: '100 km',
              MaxRangeFullSpeed: '80 km',
              Warranty: '1 year on electronics',
              OtherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe'],
            }}
          />
          <VehicleComparison
            vehicleName="Rhyno SE03 Lite"
            specifications={{
              Battery: '1.8 kWh',
              BatteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
              Motor: '1500W',
              MaxSpeed: '55 km/h',
              MaxRange30: '100 km',
              MaxRange45: '90 km',
              MaxRangeFullSpeed: '70 km',
              Warranty: '1 year on electronics',
              OtherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe'],
            }}
          />
          <VehicleComparison
            vehicleName="Rhyno SE03 Max"
            specifications={{
              Battery: '2.7 kWh',
              BatteryFeatures: 'LFP with 1500 cycles, Active Balancing, Waterproof (IP67)',
              Motor: '2000W',
              MaxSpeed: '65 km/h',
              MaxRange30: '120 km',
              MaxRange45: '100 km',
              MaxRangeFullSpeed: '80 km',
              Warranty: '1 year on electronics',
              OtherBenefits: ['Fire-safe battery', 'Range prediction', 'Comfortable ride', 'Stable and safe'],
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Compare;