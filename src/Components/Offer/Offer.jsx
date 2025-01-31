import React from 'react'
import '../Offer/Offer.css'
import exclusive from '../Assets/exclusive_image.png'

const Offer = () => {
  return (
    <div className='offer'>
      <div className="offer-left">
        <h1>Exclusive</h1>
        <h1>Offer for you</h1>
        <p>
            ONLY FOR BEST SELLER PRODUCTS
        </p>
        <button>Click Now</button>
      </div>
      <div className="offer-right">
        <img src={exclusive} alt="" />
      </div>
    </div>
  )
}

export default Offer
