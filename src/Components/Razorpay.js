// razorpay.js

// Function to load Razorpay script
export const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(window.Razorpay);
      };
      document.body.appendChild(script);
    });
  };
  
  // Function to create an order
  export const createOrder = async () => {
    // Call your API to create an order on the server
    // Replace the URL with your actual server endpoint
    const response = await fetch('/order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 500, // Amount to be paid
      }),
    });
    const data = await response.json();
    return data;
  };