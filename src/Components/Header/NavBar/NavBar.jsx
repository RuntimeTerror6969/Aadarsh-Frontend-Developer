import React from 'react'

import { SiSwiggy } from "react-icons/si";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';


const NavBar = () => {

  

  return (
    <div className='border p-3 shadow-lg flex justify-between items-center md:pr-10 fixed w-full bg-white'>
      <div className='flex  items-center'>
        <Link to='/' >
        <SiSwiggy className='text-orange-500 text-4xl md:text-6xl'/>
        </Link>
        <h1 className='text-base md:text-lg font-extrabold text-orange-500 '>SWIGGY</h1>
        

      </div>
      <div className=' md:w-96 md:h-10 rounded-md md:bg-gray-100 flex justify-between items-center p-2'>
        <input className='hidden md:block px-2 font-rob bg-gray-100 outline-none w-80 text-sm ' type="text" placeholder='Search for restaurant and food' />
        <IoSearch className='text-xl text-gray-500 md:text-gray-400'/>
      </div>
     
    </div>
  )
}

export default NavBar
