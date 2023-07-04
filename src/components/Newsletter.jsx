import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2'> 
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips and tricks to optimize the flow</h1>
                <p>Sign up for Newsletter</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-4 w-full rounded' type="email" placeholder='Enter the email' />
                    <button className='bg-[#304daa]  w-[200px] rounded-md ml-4 my-6 font-medium py-4 mx-auto'>Notify me</button> 
                </div>
                <p>We care about privacy of your important data.</p>
                <p><span className='text-[#304daa]'>Read our privacy policy</span></p>
            </div>  
        </div>
    </div>
  )
}

export default Newsletter