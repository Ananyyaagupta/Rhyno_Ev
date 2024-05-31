import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Rentals from './Components/Rentals';
import Prebook from './Components/Prebook';
import Products from './Components/Products';
import Product1 from './Components/Products/Product1';
import Product3 from './Components/Products/Product3';
import Product2 from './Components/Products/Product2';
import Compare from './Components/Products/Compare';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes> 
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/rentals" element={<Rentals />} />
        <Route path="/prebook" element={<Prebook />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/product1" element={<Product1 />} />
        <Route path="/products/product3" element={<Product3 />} />
        <Route path="/products/product2" element={<Product2 />} />
        <Route path="/products/compare" element={<Compare />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
