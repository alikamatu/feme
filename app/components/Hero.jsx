import React from 'react'

const Hero = () => {
  return (
    <div className='flex h-screen relative text-white'>
        <div className="flex bg-[url('./assets/bg-01.jpg')] bg-right-bottom bg-fixed brightness-50 h-full w-full"></div>
        <div className="flex absolute top-0 w-full h-full justify-center items-center">
            <div className="flex flex-col justify-center gap-4 items-center">
                <p className='uppercase font-thin text-xs '>Casual and everyday</p>
                <h1 className='font-cormo italic capitalize font-normal text-7xl w-[55%] text-center'>Effortlessly blend comfort & style!</h1>
                <p className='uppercase font-semibold w-[71%] text-center text-xs'>Effortlessly blend comfort and style with our Casual & Everyday collection, featuring cozy sweaters, versatile denim, laid-back tees, and relaxed-fit joggers for your everyday adventures</p>
                <button className='border-[1px] border-white py-3 px-6 text-xs uppercase font-bold'>View Collections</button>
            </div>
        </div>
    </div>
  )
}

export default Hero
