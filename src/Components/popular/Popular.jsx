import React from 'react'
import '../popular/Popular.css'
import data_product from '../Assets/data'
import Items from '../items/Items.jsx'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <hr />
        <div className='popular-items'>
            {data_product.map((items,i)=>{
                return <Items key={i}  id={items.id} name={items.name} image={items.image} 
                old_price={items.old_price} new_price = {items.new_price}/>
            })}
        </div>
      
    </div>
  )
}

export default Popular
