import React from 'react';
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import About from "./About";
import pic from "../photos/p3.png";
import Mission from "./Mission";
import Join from "./Join";
import Footer from './Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='max-w-7xl mx-auto px-4 flex flex-col md:flex-row my-4 g-slate-700'>
        <div className='md:mt-40 md:w-1/2'>
          <h1 className='text-3xl  sm:text-4xl font-medium font-tektur text-[#F2BE22] md:text-4xl'>
            Share a Meal, Spread the Love:
          </h1>
          <h2 className='text-[#F24C3D] text-xl font-normal py-4 md:text-3xl'>
            Together, We Can End Hunger
          </h2>
          <p className='text-sm md:text-base'>
            Join us in fighting hunger and spreading hope through the simple
            act of food donation. Your generosity can make a lasting difference
            in someone's life.
          </p>
          <div className='mt-6 md:mt-10 sm:space-x-4'>
            <Link
              to='/donate'
              className='bg-[#F24C3D] mr-4 text-white rounded-xl mb-4 py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'
            >
              Donate 
            </Link>
            <Link
              to='/contact'
              className='bg-[#fff] text-[#F24C3D] border-[#F24C3D] rounded-xl py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#22A699] hover:text-[#22A699] duration-300 hover:border border border-transparent'
            >
              Contact Us 
            </Link>
          </div>
        </div>
        <img
          src={pic}
          alt="Food Donation"
          className="w-full md:w-1/2"
        />
        
      </div>
      <About/>
      <Mission/>
      <Join/>
      <Footer/>
    </>
  );
}

export default Home;
