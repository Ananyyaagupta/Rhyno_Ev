import React from 'react';
import './Prebook.css'; 
import { loadRazorpay, createOrder } from './Razorpay.js'; // Import functions to handle Razorpay integration

const Prebook = () => {
  const handlePrebook = async (event) => {
    event.preventDefault();
    const { order_id } = await createOrder(); // Create order on the server
    const razorpay = await loadRazorpay(); // Load Razorpay script

    const options = {
      key: 'YOUR_RAZORPAY_KEY', // Replace with your Razorpay key
      amount: 500, // Amount to be paid
      currency: 'INR',
      order_id: order_id,
      name: 'Rhyno EV',
      description: 'Prebooking Payment',
      handler: function(response) {
        alert(response.razorpay_payment_id);
        alert(response.razorpay_order_id);
        alert(response.razorpay_signature);
      }
    };

    const rzp = new razorpay(options);
    rzp.open();
  };

  return (
    <div className="prebook-page">
      <div className="prebook-content">
        <h1>Prebook Your Rhyno EV</h1>
        <form className="prebook-form" onSubmit={handlePrebook}>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="tel" placeholder="Phone Number" required />
          <input type="text" placeholder="Address" required />
          <button type="submit">Prebook Now</button>
        </form>
      </div>
    </div>
  );
};

export default Prebook;