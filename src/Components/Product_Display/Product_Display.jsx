import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ShoppingContext } from '../../Context/Shopping_Context'; // Verify the correct path

const Product_Display = ({ product }) => {
  const { addCart } = useContext(ShoppingContext);

  const handleAddToCart = (itemId) => {
    addCart(itemId); // This should trigger the state update in ShoppingContextProvider
  }

  return (
    <div className="container my-6">
      <div className="row">
        <div className="col-md-6">
          <div className="d-flex flex-column align-items-right">
            <img src={product.image} alt="" className="img-fluid mb-3" />
            <div className="d-flex justify-content-right">
              <img src={product.image} alt="" className="img-thumbnail me-2" />
              <img src={product.image} alt="" className="img-thumbnail me-2" />
              <img src={product.image} alt="" className="img-thumbnail me-2" />
              {/* <img src={product.image} alt="" className="img-thumbnail" /> */}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <div className="d-flex align-items-center mb-2">
            <img src={star_icon} alt="" className="me-1" />
            <img src={star_icon} alt="" className="me-1" />
            <img src={star_icon} alt="" className="me-1" />
            <img src={star_icon} alt="" className="me-1" />
            <img src={star_dull_icon} alt="" />
            <p className="ms-2">(200)</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <div className="text-muted text-decoration-line-through me-2">${product.old_price}</div>
            <div className="fw-bold">${product.new_price}</div>
          </div>
          <p className="mb-3">A lightweight, usually knitted, pullover shirt, close-fitting and round neckline, short sleeve, worn as an undershirt.</p>
          <h5>Select Size</h5>
          <div className="d-flex mb-3">
            <button className="btn btn-outline-secondary me-2">S</button>
            <button className="btn btn-outline-secondary me-2">M</button>
            <button className="btn btn-outline-secondary me-2">L</button>
            <button className="btn btn-outline-secondary me-2">XL</button>
            <button className="btn btn-outline-secondary">XXL</button>
          </div>
          <button onClick={() => handleAddToCart(product.id)} className="btn btn-primary mb-3">ADD TO CART</button>
          <p><span className="fw-bold">Category:</span> Womens, T-Shirt, Crop Top</p>
          <p><span className="fw-bold">Tags:</span> Modern, T-Shirt, Latest</p>
        </div>
      </div>
    </div>
  );
};

export default Product_Display;
