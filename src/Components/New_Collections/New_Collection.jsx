import React from 'react'
import './New_Collection.css'
import new_collections from '../Assets/new_collections'
import Items from '../items/Items'

const New_Collection = () => {
  return (
    <div className='New_Collection'>
        <h1>New Collections</h1>
        <hr />
        <div className="Collections">
            {new_collections.map((items,i)=>{
                return <Items key={i}  id={items.id} name={items.name} image={items.image} 
                old_price={items.old_price} new_price = {items.new_price}/>
            })}
        </div>
      
    </div>
  )
}

export default New_Collection
