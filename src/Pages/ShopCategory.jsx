import React, { useContext } from 'react';
import { ShoppingContext } from '../Context/Shopping_Context'; // Verify correct path
import dropping_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/items/Items'; // Correct import path
import '../Pages/CSS/ShopCategory.css';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShoppingContext);
  console.log('all_product:', all_product);
  console.log('props:', props);

  return (
    <div className='shop-category'>
      <img src={props.banner} alt="" className='shopping-banner'/>
      <div className='shopcategory-index'>
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className="ShopCategory-sort">
          sort by <img src={dropping_icon} alt="" />
        </div>
      </div>
      <div className='shopcategory-product'>
        {all_product && all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Items
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                old_price={item.old_price}
                new_price={item.new_price}
              />
            );
          }
          return null; // Return null if the category does not match
        })}
      </div>
      {/* <div className="shopCategory-loadmore">
        Explore more
      </div> */}
    </div>
  );
}

export default ShopCategory;
