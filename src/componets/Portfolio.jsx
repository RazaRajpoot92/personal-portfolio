import React from 'react'

import portfolioData from '../data/data'




const Portfolio = () => {
  return (
    <div id='portfolio' className='my-28 py-10 rounded-lg p-4 bg-indigo-400 text-white'>
        <h1 data-aos="fade-down" data-aos-duration="1200" className='font-semibold text-center text-3xl'>My Recent <span className='text-red-500'>Projects</span></h1>
        
        <div className='flex gap-2 justify-center flex-wrap pt-10'>

            {
                portfolioData.map(project=>(
                    <div data-aos="fade-zoom" data-aos-duration="1500" key={project.name} className='relative flex flex-col'>
                       <a target='_blank' href={project.repoLink}>
                        <img className='w-[320px] rounded-md h-[200px]' src={project.img} alt="youtube" />

                        <h2 className='font-semibold mt-2  text-center'>{project.name}</h2>
                        </a>
                    </div>
                ))
            }
            

        </div>

    </div>
  )
}

export default Portfolio