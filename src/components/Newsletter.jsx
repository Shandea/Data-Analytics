import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up for our newsletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                <input className='w-full flex text-black p-3 rounded-md' type='email' placeholder='Enter your email address' />
                <button className='bg-[#00df9a] hover:bg-[#00c48c] text-black font-medium w-[200px] my-6 ml-4 px-6 py-3 rounded-md'>Notify Me</button>
                </div>
                <p>We care about the protection of your data. Read our <span className='text-[#00df9a]'> Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter