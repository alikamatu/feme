import React from 'react'
import Photo from '../assets/img-08-a-400x488.jpg'
import ImageThree from '../assets/img-06-a-black-300x366.jpg'
import PhotoOne from '../assets/img-05-a-white-300x366.jpg'
import PhotoTwo from '../assets/img-01-a-400x488.jpg'
import Image from 'next/image'
import { AiOutlineShopping } from 'react-icons/ai'

const allproducts = [
    {
        id: 1,
        name: "Timeless Classic Collection",
        image: Photo,
        price: 124.90,
        category: "Work & Office",
    },
    {
        id: 2,
        name: "Timeless Classic Collection",
        image: ImageThree,
        price: 124.90,
        category: "Work & Office",
    },
    {
        id: 3,
        name: "Timeless Classic Collection",
        image: PhotoOne,
        price: 124.90,
        category: "Work & Office",
    },
    {
        id: 4,
        name: "Timeless Classic Collection",
        image: PhotoTwo,
        price: 124.90,
        category: "Work & Office",
    }
]

const Popular = () => {
  return (
    <div className='flex flex-col bg-white pt-20 w-full justify-center items-center pb-20 gap-8 p-8'>
        <h1 className='font-cormo font-semibold text-6xl italic'>Most Popular</h1>
      <div className="flex w-[80%] justify-center items-center">
        <div className="grid grid-cols-4 gap-4">
            {allproducts.map((item, i) => (
                <div className="flex flex-col" key={i}>
                    <div className="flex relative">
                        <Image src={item.image} className='relative w-[280px] h-[330px] object-cover' alt={`${item.name}'s image`} />
                        <AiOutlineShopping className='absolute top-5 right-5 text-white bg-black/30 rounded-full p-1 w-7 h-7 justify-center items-center' />
                    </div>
                    <div className="flex flex-col w-full gap-2 mt-2 justify-center items-center  text-sm">
                        <p className='text-gray-400 text-xs font-semibold'>{item.category}</p>
                        <p className='font-cormo text-xs font-semibold'>{item.name}</p>
                        <p className='font-bold text-xs'>${item.price}</p>
                        <div className="flex gap-2">
                            <p className='border p-3 w-8 h-8 flex justify-center items-center text-center font-semibold text-gray-300 text-xs'>XL</p>
                            <p className='border p-3 w-8 h-8 flex justify-center items-center text-center font-semibold text-gray-300 text-xs'>L</p>
                            <p className='border p-3 w-8 h-8 flex justify-center items-center text-center font-semibold text-gray-300 text-xs'>M</p>
                            <p className='border p-3 w-8 h-8 flex justify-center items-center text-center font-semibold text-gray-300 text-xs'>S</p>
                            <p className='border p-3 w-8 h-8 flex justify-center items-center text-center font-semibold text-gray-300 text-xs'>XM</p>
                        </div>
                        <div className="flex gap-2">
                            <div className="bg-red-600 w-4 h-4 rounded-full"></div>
                            <div className="bg-green-600 w-4 h-4 rounded-full"></div>
                            <div className="bg-orange-600 w-4 h-4 rounded-full"></div>
                            <div className="bg-black w-4 h-4 rounded-full"></div>
                            <div className="bg-blue-600 w-4 h-4 rounded-full"></div>
                        </div>
                        </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Popular
