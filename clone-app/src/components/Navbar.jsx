import React from 'react'
import Button from './Button'
import logo2 from '../assets/images/logo2.png'

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-transparent p-6'>
        <img className='float:left pr-8 ' src={logo2}/>


        {/* <div className="float:left"> */}
        <div className="text-sm lg:flex-grow pr-8 m-3 ">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;">
        Home
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4">
        Redeem
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey">
        My movies
            </a>
        {/* </div> */}
        {/* <div>
            <a href="#" className="inline-block text-sm px-4 py-2 leading-none bg-indigo-600 border rounded-full text-white border-white hover:border-transparent hover:text-white hover:bg-indigo-300 mt-4 lg:mt-0">Download</a>
        </div> */}
        </div>
        <div>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-grey mr-4 float:left;">
            Sign In
                </a>
                <Button/>

</div>

        
    </nav>
  )
}
