import React, { createContext, useContext, useState } from 'react';
import all_product from '../Components/Assets/all_product'; // Verify this path

export const ShoppingContext = createContext(null);

const GetDefault = () => {
  let card = {};
  for (let index = 0; index < all_product.length; index++) {
    card[index] = 0;
  }
  return card;
}

const ShoppingContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(GetDefault());

  // console.log(cartItems)

  const addCart = (ItemId) => {
    setCartItems(prev => ({ ...prev, [ItemId]: prev[ItemId] + 1 }));
    console.log(cartItems)
  }

  const removeCart = (ItemId) => {
    setCartItems(prev => ({ ...prev, [ItemId]: prev[ItemId] - 1 }));
  }

  const getTotalCartAmout = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
      }
    }
    return totalAmount; // Move return statement outside of the loop
  };

  const getTotalCartItems =()=>{
    let totalAmount = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalAmount += cartItems[item];
      }
    }
    return totalAmount;
  }
  
  const contextValue = {getTotalCartItems, getTotalCartAmout, all_product, cartItems, addCart, removeCart };

  return (
    <ShoppingContext.Provider value={contextValue}>
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
