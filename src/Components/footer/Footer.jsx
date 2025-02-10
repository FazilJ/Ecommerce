import React, { useContext } from 'react';
import { ThemeContext } from '../../Context/ThemeContext';
import '../footer/Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pinrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
        <div className='footer_logo'>
            <img src={footer_logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="footer_link">
            <li>Company</li>
            <li>Product</li>
            <li>Office</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="Social-media">
            <div className="footer-icon-container">
                <img src={instagram} alt="" />
                <img src={pinrest} alt="" />
                <img src={whatsapp} alt="" />
            </div>
            
        </div>
        <div className="footer-copyrights">
            <hr />
            <p>Copyright@ 2024 - All Rights Register.</p>
        </div>
    </footer>
  )
}

export default Footer;
