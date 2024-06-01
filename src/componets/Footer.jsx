import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-black px-20 py-4 relative '>

            <div className='flex justify-between my-4 mb-8'>
               
                    <div className='text-gray-200 flex flex-col gap-3'>
                        <h1>Are you intrested in developing stunning and innovative products?</h1>
                        <a href='#contact' className=' border hover:text-indigo-500 ease-in duration-200 border-indigo-500 hover:bg-transparent hover:border hover:border-indigo-500 w-[100px] rounded-md py-2 bg-indigo-600 text-center text-white'>Hire me</a>
                    </div>

                <div className='text-gray-200'>
                    <p>Dedicated to crafting scalable web applications with seamless integration and exceptional user experiences.</p>
                    
                    <div className='flex gap-5 mt-5 items-center'>
                        <p className='text-sm'>Follow Me:</p>

                        <a className='text-xl' target='_blank' href="https://github.com/RazaRajpoot92"><i class="ri-github-fill"></i></a>
                        <a  className='text-xl'  href="#"><i class="ri-facebook-fill"></i></a>
                        <a className='text-xl' target='_blank'  href="https://www.linkedin.com/in/ahmad-raza-5b0646234/"><i class="ri-linkedin-fill"></i></a>
                        <a  className='text-xl' href="#"><i class="ri-instagram-line"></i></a>
                    </div>
                
                </div>
            </div>

            <div className='flex justify-center gap-10  text-indigo-500'>
                <a href="#about" className='hover:text-indigo-300'>About</a>
                <a href="#service" className='hover:text-indigo-300'>Service</a>
                <a href="#portfolio" className='hover:text-indigo-300' >Portfolio</a>
                <a href="#contact" className='hover:text-indigo-300' >Contact</a>
                
            </div>
    </div>
    

  )
}

export default Footer