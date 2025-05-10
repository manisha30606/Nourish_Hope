import React from 'react';
import {Link} from "react-router-dom";
import pic from "../photos/p5.jpg";
 const About = () => {
  return (
    <div>
     
    <div className='max-w-7xl mx-auto px-4  flex flex-col-reverse md:flex-row my-4'>
    <img
          src={pic}
          alt="Food Donation"
          className="w-full md:w-1/2 pr-6"
        />
        
        <div className='md:mt-10 md:w-1/2'>
          <h1 className='text-2xl pb-4 text-[#22A699]'>About</h1>
          <h1 className='text-3xl  sm:text-4xl pb-3 font-medium font-tektur text-[#F2BE22] md:text-3xl'>
          Fueling Change: Our Story in Nourishing Communities
          </h1>
         <ul className='text-xl'>
          <li className=' pb-4 '> ⭐ Directly Connects Surplus Food to Needy</li>
          <li className=' pb-4 '> ⭐ Empowering Generosity for Hunger Alleviation</li>
          <li className=' pb-4 '> ⭐ Tech-Driven, Simple Online Donations Platform</li>
          <li className=' pb-4 '> ⭐ Community Collaboration: Sharing Meals, Changing Lives</li>
         </ul>
          <p className='text-sm md:text-base'>
         
          </p>
          <div className='mt-6 md:mt-10 space-x-4'>
            
          <Link
              to='/about'
              className='bg-[#F24C3D] text-white rounded-xl py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'
            >
          About Us
            </Link>
            <Link
              to='/join'
              className='bg-[#fff] text-[#F24C3D] border-[#F24C3D] rounded-xl py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#22A699] hover:text-[#22A699] duration-300 hover:border border border-transparent'
            >
            Join Now
            </Link>
          </div>
        </div>
      
      </div>
    </div>
  )
}

export default About;
