import React from 'react'
import '../Pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginSignup-container">
        <h1>Sign up</h1>
        <div className="loginSignup-fields">
          <input type="text" placeholder='Your Name'/>
          <input type="email" placeholder='Your Email'/>
          <input type="password" placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='LoginSignup-Login'>Already have an account?<span>Login Here</span></p>
        <div className="loginSignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By Continue, i agree to the terms of use & privacy policy</p>
        </div>
      </div>
      
    </div>
  )
}

export default LoginSignup
