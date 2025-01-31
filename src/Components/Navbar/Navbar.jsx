import React, { useState, useContext } from 'react'
import '../Navbar/Navbar.css/'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
import { ShoppingContext } from '../../Context/Shoppping_Context';
const Navbar = () => {
    const [Menu,SetMenu]=useState("shop")
    const {getTotalCartAmout, getTotalCartItems, all_product, cartItems, addCart, removeCart } = useContext(ShoppingContext);
  return (
    <div className='Navbar'>
        <div className="nav_logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <ul className="Nav_menu">
            <li onClick={()=>{SetMenu("shop")}}><Link to="/">Shop</Link> {Menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("mens")}}><Link to="/mens">Mens</Link>{Menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("womens")}}><Link to="/womens">Womens</Link>{Menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{SetMenu("kids")}}><Link to="/kids">Kids</Link>{Menu==="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav_login">
            <Link to="/LoginSignup  "><button>Login</button></Link>
            <Link to="Cart"><img src={cart_icon} alt="" /></Link>
            <div className="nav_cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar
