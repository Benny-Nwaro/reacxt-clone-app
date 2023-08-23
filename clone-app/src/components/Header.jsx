import React from 'react'
import './header.css'


function Headers() {
    return (

      <div className='main-container'> 
        <div className='nav-bars'>
        <img src="../assets/images/logo-removebg-preview.png" alt="Logo" />
          
          <button type="button" className='btn'>Home</button>

          <button type="button" className='btn'>Redeem</button>

          <button type="button" className='btn'>My movies</button>
        </div>
        
        <div className='register'>
          <button type="submit"> </button>
          <button type="button" className='btn'>Sign In</button>
          <button type="button" className='btn2'>Sign Up Now</button>
        </div>
          

      </div> 
      
    )

     
   
   
  

  }
  
  export default Headers;