import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex w-full h-full justify-between items-center px-4'>
      <h1 className='text-[#304daa] cursor-pointer font-bold text-3xl'>LOGO</h1>
      <ul className={`text-white hidden md:flex`}>
        <li className='mx-4 p-4 cursor-pointer'>Home</li>
        <li className='mx-4 p-4 cursor-pointer'>About</li>
        <li className='mx-4 p-4 cursor-pointer'>Contact us</li>
      </ul>
      <div onClick={handleNav} className='text-white block md:hidden'>
        {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div className={`fixed left-0 top-0 h-full w-[60%] border-r border-gray-900 bg-[#000300] ease-in-out duration-500 ${nav ? '' : 'left-[-100%]'}`}>
        <h1 className='text-[#304daa] cursor-pointer font-bold text-3xl m-4'>Timmy</h1>
        <ul className='text-white pt-14 uppercase p-4'>
          <li className='p-4 border-b border-gray-600'>Home</li>
          <li className='p-4 border-b border-gray-600'>About</li>
          <li className='p-4 border-b border-gray-600'>Contact us</li>
          <li className='p-4'>Company Name</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
