import React, { useContext } from "react";
import Remove_icon from '../../Components/Assets/cart_cross_icon.png';
import { ShoppingContext } from "../../Context/Shopping_Context";
import '../Cart_Items/Cart_Items.css'

const Cart_Items = () => {
    const {getTotalCartAmout, all_product, cartItems, addCart, removeCart } = useContext(ShoppingContext);

    return (
        <div className="cartItems">
            <div className="cart-items-format">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (
                        <div key={e.id} className="cartItems-Format cart-items-format">
                            <img src={e.image} className="Product-icon" alt="" />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className="CartItems-Quantity">{cartItems[e.id]}</button>
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img className="CartItrms-Removal"  src={Remove_icon} onClick={() => { removeCart(e.id) }} alt="" />
                        </div>
                    );
                } else {
                    return null; // Ensure to return null or another appropriate element when condition is not met
                }
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>cart Total</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>SubTotal</p>
                            <p>${getTotalCartAmout()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping Fees</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-Total-items">
                            <p>Total</p>
                            <p>${getTotalCartAmout()}</p>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cartitems-promocode">
                    <p>If i have a promo code,Enter it here</p>
                    <div className="cartitems-promobox">
                        <input type="text" placeholder="promocode"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cart_Items;
