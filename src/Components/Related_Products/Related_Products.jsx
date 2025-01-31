import React from "react";
import '../Related_Products/Related_Products.css'
import data from '../Assets/data'
import Items from '../items/Items'

const Related_Products =()=>{
    return (
        <div className="related_products">
                <h1>Related products</h1>
                <hr />
                <div className="related_products_items">
                    {data.map((items,i)=>{  
                        return <Items key={i}  id={items.id} name={items.name} image={items.image} 
                        old_price={items.old_price} new_price = {items.new_price}/>
                    })}
                </div>
        </div>
    )
}

export default Related_Products;