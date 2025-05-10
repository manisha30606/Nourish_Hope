import React from 'react';
import Navbar from './Navbar';
import Join from "./Join";
import Help from "./Help";
import { Link } from "react-router-dom";
import pic from "../photos/p3.png";

 const Contact = () => {
  return (
<>
<Navbar />
      <div className='max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row my-4'>
        <div className='md:mt-40 md:w-1/2'>
          <h1 className='text-3xl pb-3 sm:text-4xl font-medium font-tektur text-[#F2BE22] md:text-4xl'>
           Get In touch
          </h1>
          
          <p className='text-sm md:text-base'>
            Join us in fighting hunger and spreading hope through the simple
            act of food donation. Your generosity can make a lasting difference
            in someone's life. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo sed adipisci, quos laboriosam commodi cum pariatur nisi vitae facere tempore!
          </p>
          <div className='mt-6 md:mt-10 sm:space-x-4'>
            <Link
              to='/donate'
              className='bg-[#F24C3D] mr-4 text-white rounded-xl mb-4 py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'
            >
              Donate 
            </Link>
           
          </div>
        </div>
        <img
          src={pic}
          alt="Food Donation"
          className="w-full md:w-1/2"
        />
        
      </div>
      <Help/>
    
     </>
  )
}

export default Contact;