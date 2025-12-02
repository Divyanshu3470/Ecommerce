import React from 'react'
import { icons, data } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import Products from '../pages/Products.jsx';

function Navbar() {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-black border-b-2 border-black pb-1"
      : "text-gray-700 hover:text-black";
  return (
    <div className="">
      <div className="flex justify-center">
        <div className='flex justify-between items-center mx-8 my-4 w-[85vw]'>
          <div className="">
            <img className='h-[3rem]' src={icons.logo} alt="" />
          </div>
          <div className="flex justify-between items-center gap-8 font-semibold text-gray-300">
            <NavLink to='/' className={linkClass}>Home </NavLink>
            <NavLink to='/collection' className={linkClass}>Collection</NavLink>
            <NavLink to='/about' className={linkClass}>About</NavLink>
            <NavLink to='/contact' className={linkClass}>Contact</NavLink>
          </div>
          <div className="flex justify-between items-center gap-8 mx-4">
            <img className='h-[1.5rem]' src={icons.search_icon} alt="search" />
            <img className='h-[1.5rem]' src={icons.profile_icon} alt="profile" />
            <img className='h-[1.5rem]' src={icons.cart_icon} alt="cart" />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar