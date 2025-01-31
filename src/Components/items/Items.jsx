import React from "react";
import "../items/Items.css";
import { Link } from "react-router-dom";

const Items = (props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img   src={props.image} alt="" className='img'/></Link>
      <p>{props.name}</p>
      <div className="items_price">
        <div className="items_price_new">
          ${props.new_price}
        </div>
        <div className="items_price_old">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
};

export default Items;
