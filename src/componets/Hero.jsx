import React from 'react'
import hero_image from "../assets/raza-bg.png"

const Hero = () => {
  return (
    <div className='py-6 flex justify-around'>
        <div className='flex flex-col gap-3'>
            <p data-aos="fade-up" data-aos-duration='1500' className='text-sm text-gray-500'>Hi, Welcome!</p>
            
            <div data-aos="fade-right" data-aos-duration="2000" className=''>
                <h5 className='font-[600] text-[2.9rem]'>I'm <span className='text-indigo-600'>Ahmad</span> Raza</h5>
                <h5 className='font-[500]  text-[2.8rem] mt-[-10px]'>Software Engineer</h5>
            </div>
            
            <div data-aos='fade-left' data-aos-duration="1500" className='flex mt-8 items-center gap-4'>
                <button className='px-6 relative text-white ease-in duration-200 rounded-md bg-gradient-to-tr border border-indigo-400 hover:from-sky-300 hover:to-indigo-400 from-indigo-400 to-purple-400 py-2 '>
                     <i className="ri-mail-line mr-1"></i>Hire Me
                     <span className='absolute h-4 w-4 animate-ping bg-indigo-300 top-[-6px] right-[-6px] rounded-full'></span>
                     <span className='absolute h-4 w-4  bg-indigo-400 top-[-6px] right-[-6px] rounded-full'></span>
                </button>
                <a href='#portfolio' className='border-b-[1px] text-indigo-400 text-sm ml-3 border-indigo-500'>See portfolio</a>
            </div>

            <div data-aos='fade-right' data-aos-duration="2500" className='pl-16 mt-5'>
                <p className='w-96 text-sm leading-6 text-gray-600'>
                    <i className=" text-indigo-600 text-lg mr-2 ri-command-fill"></i> Passionate software engineer with expertise 
                    in Javascript, python programming languages. Dedicated to crafting scalable web applications 
                    with seamless integration and exceptional user experiences. 
                    Committed to continuous learning and collaboration for building innovative solutions.</p>
            </div>

            <div className='flex gap-5 mt-5 items-center'>
                <p className='text-sm'>Follow Me:</p>

                <a className='text-xl' href="#"><i class="ri-github-fill"></i></a>
                <a  className='text-xl'  href="#"><i class="ri-facebook-fill"></i></a>
                <a className='text-xl'  href="#"><i class="ri-linkedin-fill"></i></a>
                <a  className='text-xl' href="#"><i class="ri-instagram-line"></i></a>
            </div>
            
        </div>

        <div>
            <div className='w-[300px] h-[400px] shadow-2xl  shadow-indigo-300 bg-indigo-400  rounded-3xl flex justify-center items-end '>
                <img className='h-[350px] w-[300px] ' src={hero_image} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero