import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Item from '../components/Item.jsx';
import Product from '../components/productid.jsx';
import Cart from '../components/Cart.jsx';
import SignUp from '../components/sigup.jsx'; 
import Login from '../components/auth.jsx'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav>
          <div className="nav-left">
            ElectronicShopMe
          </div>
          <div className="nav-right">
            <Link to="/cart">
              <button className="secondary-button">Go to Cart</button>
            </Link>
            <Link to="/login">
              <button className="secondary-button">Login</button>
            </Link>
            <Link to="/signup">
              <button className="secondary-button">Sign Up</button>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/product/:productId" element={<Product />} />  
          <Route path="/cart" element={<Cart />} /> 
          <Route path="/login" element={<Login />} /> 
          <Route path="/signup" element={<SignUp />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
