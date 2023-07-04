import React from 'react'
import Single from '../assets/single.png';
import Double from '../assets/double.png';
import Triple from '../assets/triple.png';
const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Single} alt="" />
                    <h2 className='text-2xl text-center font-bold py-6'>Single user</h2>
                    <p className='text-center text-4xl font-bold'>149$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>500Gb Data storage</p>
                    <p className='py-2 border-b mx-8'>Sends upto 2Gb</p>
                    <p className='py-2 border-b mx-8'>Granted 1 user</p>
                </div>
                  <button className='bg-[#304daa] text-white  w-[200px] rounded-md mt-6 font-medium px-6 py-3 mx-auto'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Double} alt="" />
                    <h2 className='text-2xl text-center font-bold py-6'>Double user</h2>
                    <p className='text-center text-4xl font-bold'>300$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>1Tb Data storage</p>
                    <p className='py-2 border-b mx-8'>Sends upto 4Gb</p>
                    <p className='py-2 border-b mx-8'>Granted 4s user</p>
                </div>
                  <button className='bg-[#304daa] text-white  w-[200px] rounded-md mt-6 font-medium px-6 py-3 mx-auto'>Start Trial</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-8 rounded lg hover:scale-105 duration-300'>
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Triple} alt="" />
                    <h2 className='text-2xl text-center font-bold py-6'>Triple user</h2>
                    <p className='text-center text-4xl font-bold'>450$</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>2TB Data storage</p>
                    <p className='py-2 border-b mx-8'>Sends upto 8Gb</p>
                    <p className='py-2 border-b mx-8'>Granted 6 user</p>
                </div>
                  <button className='bg-[#304daa] text-white  w-[200px] rounded-md mt-6 font-medium px-6 py-3 mx-auto'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Cards