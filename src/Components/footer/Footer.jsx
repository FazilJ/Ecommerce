import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import footer_logo from '../Assets/logo_big.png';
import instagram from '../Assets/instagram_icon.png';
import pinrest from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme === 'light' ? 'bg-light text-dark' : 'bg-dark text-light'} py-4`}>
      <div className="container">
        <div className="row align-items-center">
          {/* Logo and Brand Section */}
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <img src={footer_logo} alt="Logo" width="50" height="50" />
            <p className="mt-2 fw-bold">SHOPPER</p>
          </div>

          {/* Navigation Links Section */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#company" className="text-decoration-none text-reset">Company</a></li>
              <li className="mb-2"><a href="#product" className="text-decoration-none text-reset">Product</a></li>
              <li className="mb-2"><a href="#office" className="text-decoration-none text-reset">Office</a></li>
              <li className="mb-2"><a href="#about" className="text-decoration-none text-reset">About</a></li>
              <li className="mb-2"><a href="#contact" className="text-decoration-none text-reset">Contact</a></li>
            </ul>
          </div>

          {/* Social Media Icons Section */}
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={instagram} alt="Instagram" width="30" height="30" className="me-2" />
              </a>
              <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                <img src={pinrest} alt="Pinterest" width="30" height="30" className="me-2" />
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                <img src={whatsapp} alt="WhatsApp" width="30" height="30" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-3" />

        {/* Copyright Section */}
        <div className="text-center">
          <p className="mb-0">Copyright © 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;