import React from 'react'
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaInstagram,
} from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='text-[#304daa] cursor-pointer font-bold text-3xl'>React js</h1>
            <p className='py-4'>React js is a front end library and V of MVC,This project is created with the help of tailwind css and react</p>
            <div className='flex justify-between md:w-[75%] my-6 '>
            <FaFacebookSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaTwitterSquare size={30}/>
            <FaInstagram size={30}/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between'>
        <div>
            <h6 className='font-medium text-gray-500'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-500'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-500'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-500'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
                <li className='py-2 text-sm'>Conditions</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer