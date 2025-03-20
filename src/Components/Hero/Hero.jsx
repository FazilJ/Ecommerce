import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/Title.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleLatestCollectionClick = () => {
    // navigate('/new-collection');
  };

  return (
    <div className='Hero'>
      <div className="Hero_left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero_hand_icon">
            <p>New</p>
            <img src={hand_icon} alt="Hand Icon" />
          </div>
          <p>Collection</p>
          <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn" onClick={handleLatestCollectionClick}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="Arrow Icon" />
        </div>
      </div>
      <div className="Hero_Right">
        <img src={hero_image} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
