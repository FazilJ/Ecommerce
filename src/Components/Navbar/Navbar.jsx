import React, { useState, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../Context/Shopping_Context';
import { ThemeContext } from '../../Context/ThemeContext'; // Correct import

const Navbar = () => {
  const { getTotalCartAmout, getTotalCartItems } = useContext(ShoppingContext);
  const { theme, toggleTheme } = useContext(ThemeContext); // Use ThemeContext

  const [Menu, SetMenu] = useState("shop");

  return (
    <nav className={`navbar navbar-expand-lg ${theme === 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="30" height="30" className="d-inline-block align-top" />
          SHOPPER
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${Menu === 'shop' ? 'active' : ''}`} to="/" onClick={() => SetMenu('shop')}>Shop</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${Menu === 'mens' ? 'active' : ''}`} to="/mens" onClick={() => SetMenu('mens')}>Mens</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${Menu === 'womens' ? 'active' : ''}`} to="/womens" onClick={() => SetMenu('womens')}>Womens</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${Menu === 'kids' ? 'active' : ''}`} to="/kids" onClick={() => SetMenu('kids')}>Kids</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <Link to="/LoginSignup" className="btn btn-outline-secondary me-2">Login</Link>
            <button onClick={toggleTheme} className="btn btn-outline-secondary me-2">
              {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </button>
            <Link to="/Cart" className="position-relative">
              <img src={cart_icon} alt="Cart" width="30" height="30" />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {getTotalCartItems()}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
