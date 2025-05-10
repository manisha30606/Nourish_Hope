import React from 'react'
import pic from "../photos/p4.png"
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <section>
        <Navbar />
        <div className='max-w-[90%] mx-auto my-12'>
          <h1 className='flex justify-center text-3xl text-[#22A699] sm:text-4xl'>About Us</h1>
          <div className='w-[100%] h-[30%] flex justify-center'>
            <img src={pic} className="w-[60%] h-[50%]" alt="" />
          </div>
          <div className='flex flex-col md:flex-row w-full justify-center'>
            <div className='px-4'>
              <h1 className='text-xl text-[#F24C3D] p-2 sm:text-2xl'>Donate to Nourish Lives</h1>
              <p className='sm:text-base text-sm py-3 px-2 '>Your contribution can change lives. With every donation, you help provide nourishment, hope, and a chance for a better future. Join us in the fight against hunger and make a lasting impact today.</p>
              <Link
                to='/donate'
                className='bg-[#F24C3D] text-white rounded py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'
              >
                Donate Now
              </Link>
            </div>
            <div className='px-4'>
              <h1 className='text-xl text-[#F24C3D] p-2 sm:text-2xl'>Join Our Cause</h1>
              <p className='px-2 py-3 sm:text-base text-sm'>Become part of our community working tirelessly to eliminate hunger. Your involvement, whether through volunteering, supporting, or raising awareness, is a step toward a world with equitable access to food for all.</p>
              <Link
                to='/join'
                className='bg-[#F24C3D] text-white rounded py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

export default About