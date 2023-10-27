import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
       <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
          <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop' />
          <div className='flex flex-col justify-center'>
            <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
            <p className=''>
                Unlock the power of centralized data analytics management. Seamlessly 
                integrate and streamline your data processes, allowing for comprehensive 
                oversight and control. From data collection to insightful visualization, 
                this application empowers you to make informed decisions efficiently and 
                effectively. Elevate your data-driven strategies and harness the full 
                potential of your analytics endeavors.
            </p>
            <button className='bg-black hover:bg-[#00c48c] hover:text-[#000000] w-[200px] text-[#00df9a] font-medium my-6 mx-auto md:mx-0 py-3 rounded-md '>Get Started</button>
          </div>
       </div>
    </div>
  )
}

export default Analytics