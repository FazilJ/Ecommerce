import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './NewsLetters.css';

const NewsLetters = () => {
  return (
    <div className="newsletters">
      <h1>Get Exclusive offer on your Email</h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type="email" className="form-control" placeholder="Enter your email" />
        <button className="btn">Subscribe</button>
      </div>
    </div>
  );
};

export default NewsLetters;
