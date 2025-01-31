import React, { useContext } from 'react';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import '../Product_Display/Product_Display.css';
import { ShoppingContext } from '../../Context/Shoppping_Context'; // Verify the correct path

const Product_Display = ({ product }) => {
  const { addCart } = useContext(ShoppingContext);

  const handleAddToCart = (itemId) => {
    addCart(itemId); // This should trigger the state update in ShoppingContextProvider
  }

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>  
        <div className="productdisplay-img">
          <img className="productdisplay-main-img" src={product.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-main-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
        </div>
        <p>(200)</p>
        <div className="productdisplay-right-price">
            <div className="productdisplay-right-price-old">
                ${product.old_price}
            </div>
            <div className="productdisplay-right-price-New">
                ${product.new_price}
            </div>
        </div>
        <div className="productdisplay-right-description">
            A lightweight, usually knitted, pullover shirt, close-fitting and round neckline, short sleeve, worn as an undershirt.
        </div>
        <div className="productdisplay-right-size">
            <h1>Select Size</h1>
            <div className="productdisplay-right-size-list">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
            </div>
        </div>
        <div className="productdisplay-button">
          <button onClick={() => addCart(product.id)}>ADD TO CART</button>
        </div>
        <p className='productdisplay-right-category'><span>Category :</span> Womens, T-Shirt, Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags :</span> Modern, T-Shirt, Latest</p>
      </div>
    </div>
  );
};

export default Product_Display;
