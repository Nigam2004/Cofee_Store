import React from 'react'
import {  NavLink} from 'react-router-dom'


function Navbar() {
  return (
   <div className='px-16 py-7'>
   <ul className='flex text-2xl gap-7 pl-14'>
      <li><NavLink to='/' >Products</NavLink></li>
      <li><NavLink to='/photo'>Photo</NavLink></li>
    </ul>
    <hr className='border-t border-black'/>
    </div>
  )
}

export default Navbar
