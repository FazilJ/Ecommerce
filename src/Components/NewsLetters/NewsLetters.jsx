import React from 'react'
import '../NewsLetters/NewsLetters.css'

const NewsLetters = () => {
  return (
    <div className='newsletters'>
        <h1>Get Exclusive offer on your Email</h1>
        <p>Subscribe to our newletter and stay update</p>
        <div>
            <input type="email" placeholder='Enter the id'/>
            <button>Subcribe</button>

        </div>
    </div>
  )
}

export default NewsLetters
