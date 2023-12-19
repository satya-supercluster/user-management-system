import React, { useState } from 'react'
import { NavLink,Outlet } from 'react-router-dom'


const Navbar = () => {
  const activeNavStyle=({isActive})=>{
    return {
      fontWeight:isActive?'bold':'normal', 
    }
  }
  return (
    <>
      <div className='min-h-screen  bg-slate-700'>
        <div className='mx-2 mb-1 pt-1 sm:text-xl md:text-2xl  flex flex-row flex-wrap justify-between text-yellow-500'>
          <h1 className='p-1 font-extrabold text-orange-600'>Supercluster</h1>
          <nav className='p-1'>
            <NavLink 
            to='/dashboard'
            style={activeNavStyle}
            className='px-1 mx-1 md:py-1 hover:border-2 rounded-md hover:border-yellow-500'
            >Dashboard
            </NavLink>

            <NavLink 
            to='/archive'
            style={activeNavStyle}
            className='px-1 mx-1 md:py-1 hover:border-2 rounded-md hover:border-yellow-500'
            >Archive
            </NavLink>

            <NavLink
            to='/about'
            style={activeNavStyle}
            className='px-1 mx-1 md:py-1 hover:border-2 rounded-md hover:border-yellow-500'
            >About
            </NavLink>

            <NavLink 
            to='/contacts'
            style={activeNavStyle}
            className='px-1 mx-1 md:py-1 hover:border-2 rounded-md hover:border-yellow-500'
            >Contact
            </NavLink>
          </nav>
        </div>
        <Outlet/>
      </div>
    </>
  )
}

export default Navbar
