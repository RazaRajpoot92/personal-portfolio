import React from 'react'
import contact from '../assets/contact.jpg'

const Contact = () => {
  return (
    <div id='contact' className='py-5'>
    <h1 className='text-[50px] drop-shadow-2xl shadow-indigo-400  font-semibold text-center mb-4  text-indigo-500'>Get in Touch</h1>
    <div className='w-full   flex justify-around gap-2'>

        <div className=''>
            <img src={contact} className='h-[430px] rounded-full' alt="contact image" />

        </div>

        <div className='w-1/2 border shadow-lg shadow-indigo-200  rounded-lg bg-indigo-100 border-indigo-600 px-20 p-10'>
        <form onSubmit={(e)=>e.preventDefault()} action="https://formspree.io/f/xjvnqyop" method='POST' className='flex flex-col gap-3'>
            <input className=' border border-indigo-700 rounded-lg p-2  text-gray-600 focus:border-blue-600 focus:outline-none' type="text" name='name' placeholder='Enter your name' />
            <input className=' border border-indigo-700 rounded-lg p-2  text-gray-600 focus:border-blue-600 focus:outline-none' type="text" name='email' placeholder='Enter your email' />
            <input className=' border border-indigo-700 rounded-lg p-2  text-gray-600 focus:border-blue-600 focus:outline-none' type="text" name='subject' placeholder='Subject' />
            <textarea className=' border border-indigo-700 rounded-lg p-2  text-gray-600 focus:border-blue-600 focus:outline-none h-[150px]' name='message' placeholder='Your message...' id=""></textarea>

            <button className='px-4 py-2 hover:bg-indigo-700 bg-indigo-500 text-white rounded-md '>Send Message</button>
        </form>

        </div>

    </div>
    </div>
  )
}

export default Contact