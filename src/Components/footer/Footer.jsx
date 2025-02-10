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
        <div className="row">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            <img src={footer_logo} alt="Logo" width="50" height="50" />
            <p className="mt-2">SHOPPER</p>
          </div>
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <ul className="list-unstyled">
              <li>Company</li>
              <li>Product</li>
              <li>Office</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="col-md-4 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end">
              <img src={instagram} alt="Instagram" width="30" height="30" className="me-2" />
              <img src={pinrest} alt="Pinterest" width="30" height="30" className="me-2" />
              <img src={whatsapp} alt="WhatsApp" width="30" height="30" />
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="text-center">
          <p>Copyright © 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
