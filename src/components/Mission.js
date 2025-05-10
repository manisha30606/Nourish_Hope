import React from 'react'
import m1 from "../photos/m1.jpg";
import m2 from "../photos/m2.jpg";
import m3 from "../photos/m3.jpg";
import {Link} from "react-router-dom";

 const Mission = () => {
  return (
    <>
    <div className='max-w-7xl mx-auto'>
        <div className='text-center'>
            <h1 className='text-[#22A699] text-3xl sm:text-4xl px-3 py-2'>Extending a Hand <span className='text-[#22A699] '> Our Guiding Mission </span></h1>
            <p className='text-xl font-normal '>Uniting Communities Through Extended Helping Hands.</p>
        </div>

        <div className='flex flex-col md:flex-row'>
           <div className='w-[90%] md:w-96 mx-6 my-8 '>
            <img src={m1} alt=""  className='w-full md:w-[80%]'/>
            <h1 className='text-3xl md:text-2xl  text-[#F29727] font-semibold'>Meal Programs</h1>
            <p className='md:text-xl text-2xl' >Providing hot meals to homeless shelters, schools, or community centers to ensure everyone has access to nutritious food.</p>
           </div>
           <div className='w-[90%] md:w-96 mx-6 my-8 '>
            <img src={m2} alt=""  className='w-full md:w-[80%]'/>
           
            <h1 className='text-3xl md:text-2xl  text-[#F29727]  font-semibold'>Food Drives</h1>
            <p className='md:text-xl text-2xl'>Organizing community-wide campaigns to collect non-perishable food items for distribution to those in need.</p>
           </div>
           <div className='w-[90%] md:w-96 mx-6 my-8 '>
            <img src={m3} alt=""  className='w-full md:w-[80%]'/>
            <h1 className='text-3xl md:text-2xl  text-[#F29727] font-semibold'>Donation Matching</h1>
            <p className='md:text-xl text-2xl'>Encouraging businesses and individuals to match donations, amplifying the impact of every contribution.</p>
           </div>

        </div>
    </div>
    </>
  )
}
 export default Mission;