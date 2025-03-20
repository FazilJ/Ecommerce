import React, { useContext, useEffect, useState } from 'react';
import { ShoppingContext } from '../Context/Shopping_Context'; // Verify correct path
import dropping_icon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/items/Items'; // Correct import path
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const ShopCategory = (props) => {
  const { all_product } = useContext(ShoppingContext);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data or perform any necessary actions here
    // Handle any errors that occur during the fetch
    const fetchData = async () => {
      try {
        // Your fetch logic here
      } catch (err) {
        setError('Failed to load products. Please try again later.');
      }
    };

    fetchData();
  }, []);

  console.log('all_product:', all_product);
  console.log('props:', props);

  return (
    <div className='container'>
      {error && <div className="alert alert-danger">{error}</div>}
      <img src={props.banner} alt="" className='img-fluid my-4'/>
      <div className='d-flex justify-content-between align-items-center mb-4'>
        <p>
          <span>Showing 1-12</span> out of 36
        </p>
        <div className="d-flex align-items-center">
          sort by <img src={dropping_icon} alt="" className="ms-2"/>
        </div>
      </div>
      <div className='row'>
        {all_product && all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <div className='col-md-3 mb-4' key={item.id}>
                <Items
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  old_price={item.old_price}
                  new_price={item.new_price}
                />
              </div>
            );
          }
          return null; // Return null if the category does not match
        })}
      </div>
      {/* <div className="d-flex justify-content-center my-4">
        <button className="btn btn-secondary">Explore more</button>
      </div> */}
    </div>
  );
}

export default ShopCategory;