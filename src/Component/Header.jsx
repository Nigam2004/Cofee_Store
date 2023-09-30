import React from 'react'

function Header() {
  return (
    <div className='flex items-center gap-12  px-16'>
       <img src="banner\logo.jpg" className='h-52' />
       <div className="">
        <h1 className='text-6xl font-bold text-orange-900'>Cofee Store</h1>
        <h2 className='text-2xl text-orange-900'>Odisha , Bhubaneswar</h2>
       </div>
    </div>
  )
}

export default Header
