import React from 'react'
import Laptop from '../assets/laptop.jpg';

const Analytics = () => {
  return (
    <div className='w-full py-16 px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#304daa] font-bold md:text-3xl sm:text-2xl'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Welcome to the DASHBOARD</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus similique eos placeat mollitia reiciendis, doloribus quia quo, culpa optio nemo eum dolore quasi odio saepe, necessitatibus libero deleniti! Ipsam, debitis.</p>
                <button className='bg-[#304daa]  text-white w-[200px] rounded-md font-medium pt-4 py-4 mx-auto md:mx-0 my-4'>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics;