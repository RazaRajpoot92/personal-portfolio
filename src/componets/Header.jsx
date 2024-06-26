import React from 'react'

const Header = () => {
  return (
    <div className='py-4 flex justify-between items-center'>
        
        <div className='flex items-center gap-1'>
            <h1 className='h-[20px] p-4 flex items-center justify-center text-white w-[20px] rounded-full bg-indigo-600'>A</h1>
            <span className='text-indigo-500 font-semi-bold text-lg'>Ahmad</span>
        </div>

        <div className='flex text-lg gap-4'>
            <a  className='hover:text-indigo-500' href="#about">About</a>
            <a className='hover:text-indigo-500' href="#service">Service</a>
            <a className='hover:text-indigo-500' href="#portfolio">Portfolio</a>
            <a className='hover:text-indigo-500' href="#contact">Contact</a>
        </div>

        <div className='h-5 p-4 border border-indigo-600 flex items-center rounded-md
         bg-indigo-600 justify-center
         text-white cursor-pointer hover:bg-white hover:text-indigo-700
         ease-in duration-200 
         '>
          <a href="#contact">
            <i  className="ri-send-plane-line"> Let's Talk</i>
            </a>
        </div>

    </div>
  )
}

export default Header