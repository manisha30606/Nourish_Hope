import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='flex justify-between items-center h-24 max-w-[1340px] mx-auto px-4 text-[#F79327]'>
  <h3 className='w-full text-xl sm:text-3xl font-normal text-[#F29727]'>
    Nourish
    <span className='text-[#F24C3D] font-tektur font-semibold'>Hope</span>
</h3>



      <ul className='hidden md:flex text-xl font-normal'>
        <Link to='/'>
          <li className='mx-5 hover:text-orange-700'>Home</li>
        </Link>
        <Link to='/about'>
          <li className='mx-5 hover:text-orange-700'>About</li>
        </Link>
        <Link to='/contact'>
          <li className='mx-5 hover:text-orange-700'>Contact</li>
        </Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r bg-[#FFE569] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-xl sm:text-3xl font-normal  m-4'>Nourish<span className=' text-[#DB005B] font-semibold'>Hope</span></h1>
        <ul className='uppercase p-4'>
          <Link to='/'>
            <li className='mx-5 my-4 hover:text-black'>Home</li>
          </Link>
          <Link to='/about'>
            <li className='mx-5 my-4 hover:text-black'>About</li>
          </Link>
          <Link to='/contact'>
            <li className='mx-5 my-4 hover:text-black'>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
