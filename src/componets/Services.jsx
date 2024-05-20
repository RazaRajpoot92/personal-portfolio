import React from 'react'

const Services = () => {
  return (
    <div id='service' className=' mt-10 flex flex-col items-center '>

        <div className='w-[600px] flex flex-col items-center gap-10'>
            <h1 className='text-3xl font-semibold '>What I <span className='text-indigo-600'>Could</span> Do</h1>
            <p className='text-gray-600 leading-6'>As a <span className='text-indigo-500'>MERN</span> software engineer, I specialize in building dynamic, responsive, and high-performance web applications 
            using the MERN stack: MongoDB, Express.js, React.js, and Node.js. I can design and develop scalable backend systems, implement RESTful APIs, and create interactive and intuitive 
            <span className='text-indigo-500'> user interfaces.</span></p>
        </div>

        <div className='antialiased flex flex-col items-center mt-10 relative w-full'>
           
            {/* vertical line */}
            <div data-aos="fade-down" data-aos-duration="1500" className='w-1 hidden lg:block  rounded-full h-full bg-indigo-400 absolute transform -translate-x-1/2 left-1/2'></div>
            {/* Left card */}
            <div data-aos='fade-right' data-aos-duration="1500" className='h-[180px]  flex justify-start w-[610px] p-2'>
            
                <div className='w-[250px] ease-in duration-200 shadow-sm shadow-indigo-300 text-indigo-600  hover:text-white hover:bg-indigo-400 rounded-md p-4 h-[160px]'>
                 
                    <h1 className=' font-semibold'>Frontend Development</h1>
                    <p className=' w-full h-full hover:text-white text-black text-sm leading-6 mt-3'>Transform your digital presence with cutting-edge frontend development services</p>
                </div>
                <div className='w-[48px] bg-indigo-400 h-1 self-center mt-2'></div>
            
            </div>
            {/* Right Card */}
            <div data-aos='fade-left' data-aos-duration="1500"  className='h-[180px] flex justify-end w-[615px] p-2'>
            
                <div className='w-[48px] bg-indigo-400 h-1 self-center mt-2'></div>
            
                <div className='w-[250px] justify-self-end  ease-in duration-200 shadow-sm shadow-indigo-300 text-indigo-600  hover:text-white hover:bg-indigo-400 rounded-md p-4 h-[160px]'>
                 
                    <h1 className=' font-semibold'>Backend Development</h1>
                    <p className=' w-full h-full hover:text-white text-black text-sm leading-6 mt-3'>Power your applications with our robust backend development services</p>
                </div>
            
            </div>

            {/* Left card */}
            <div data-aos='fade-right' data-aos-duration="1500" className='h-[180px]  flex justify-start w-[610px] p-2'>
            
                <div className='w-[250px] ease-in duration-200 shadow-sm shadow-indigo-300 text-indigo-600  hover:text-white hover:bg-indigo-400 rounded-md p-4 h-[160px]'>
                
                    <h1 className=' font-semibold'>Software Testing</h1>
                    <p className=' w-full h-full hover:text-white text-black text-sm leading-6 mt-3'>Ensure the reliability and performance with our comprehensive software testing services</p>
                </div>
                <div className='w-[48px] bg-indigo-400 h-1 self-center mt-2'></div>
        
            </div>
     
            {/* Right Card */}
            <div data-aos='fade-left' data-aos-duration="1500" className='h-[180px] flex justify-end w-[615px] p-2'>
            
                <div className='w-[48px] bg-indigo-400 h-1 self-center mt-2'></div>
            
                <div className='w-[250px] justify-self-end  ease-in duration-200 shadow-sm shadow-indigo-300 text-indigo-600  hover:text-white hover:bg-indigo-400 rounded-md p-4 h-[160px]'>
                
                    <h1 className=' font-semibold'>CMS Management</h1>
                    <p className=' w-full h-full hover:text-white text-black text-sm leading-6 mt-3'>Streamline your content strategy with our expert CMS management services</p>
                </div>
            
            </div>
            
        
        </div>

    </div>
  )
}

export default Services