import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css'; // Import your CSS file for styling

const ProductDisplay = () => {
  return (
   <div className='whole'>
   <div className="product-container">
      <h1 className="product-heading">PRODUCTS</h1>
      
 {/* Product Box 1 */}
      <div className="product-box">
      <Link to="/products/product1">
          <img src="\Images\Rhyno_golden.png"  alt="SE03" />
          <h2>SE03</h2>
          </Link>
      </div>

      {/* Product Box 2 */}
      <div className="product-box">
      <Link to="/products/product2">
        <img src="\Images\Rhyno_black.png" alt="SE03lite" />
          <h2>SE03 Lite</h2>
          </Link>
      </div>

      {/* Product Box 3 */}
      <div className="product-box">
      <Link to="/products/product3">
        <img src="\Images\Rhyno_red.png" alt="SE03max" />
          <h2>SE03 Max</h2>
         </Link>
      </div>
    </div>
    </div>
  );
};

export default ProductDisplay;