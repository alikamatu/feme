import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai';

const Navbar = () => {
  return (
    <div className="flex w-full justify-center items-center bg-transparent text-white z-10 p-6 absolute top-0">
      <div className="flex w-[70%] justify-between items-center">
      <div className="flex space-x-4 w-[40%]">
        <Link href="/" className='font-semibold text-sm'>Home</Link>
        <Link href="/" className='font-semibold text-sm'>Shop</Link>
        <Link href="/" className='font-semibold text-sm'>About Us</Link>
        <Link href="/" className='font-semibold text-sm'>Contact Us</Link>
      </div>
      <div className="flex flex-col text-center justify-center items-center w-[100%]">
        <p className="text-sm uppercase font-thin">Femme</p>
        <p className="text-xl font-cormo italic">Wardrobe</p>
        <div className="flex border-t-2 border-white w-8"></div>
      </div>
      <div className="flex items-end justify-end gap-4 w-[40%]">
        <AiOutlineSearch className='text-2xl' />
        <AiOutlineShoppingCart className='text-2xl' />
      </div>
      </div>
    </div>
  );
};

export default Navbar;
