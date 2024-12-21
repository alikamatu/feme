import Image from 'next/image'
import BG from '../assets/bg-03-b.jpg'
import React from 'react'

const Explore = () => {
  return (
    <div className='relative flex w-full h-screen'>
      <div className="relative flex bg-[url('./assets/bg-02.jpg')] bg-fixed brightness-50 h-full w-full">
      </div>
      <div className="flex flex-row-reverse w-full h-full absolute top-0 right-96 justify-start items-center">
        <div className="flex flex-col justify-center items-center gap-5">
        <Image src={BG} className='w-[450px] h-[550px] object-cover' alt='fs'/>
        <h1 className='font-cormo w-[450px] text-white text-4xl text-center italic font-medium'>Explore our exquisite Bag Collection now!</h1>
        <button className='border border-white text-white text-xs font-semibold uppercase py-4 px-7 w-52'>View Collection</button>
        </div>
        </div>
    </div>
  )
}

export default Explore
