import React from 'react'
import Typed from 'react-typed';
export const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-[#304daa] uppercase font-bold p-2'>Growing with analytics</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl md:py-6'>Grow with data</h1>
            <div className='flex flex-col items-center'>
                <p className='md:text-5xl sm:text-3xl text-xl font-bold py-4'  >
                fast,flexible and financing for
                </p>
                <Typed 
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['BTB','BTC','SAAS']} 
                        typeSpeed={120} backSpeed={140}
                        loop
                        />
            </div>
              <p className='md: text-2xl xl font-bold text-gray-500'>Monitor your data analytics for reveue</p>
              <div className='flex display items-center mt-5'>
                  <button className='bg-[#304daa]  w-[200px] rounded-md font-medium py-5 mx-auto'>Get started</button>
              </div> 
        </div> 
    </div>
  )
}
