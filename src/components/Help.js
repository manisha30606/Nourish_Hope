import React from 'react';
import Image from "../photos/m1.jpg"

import Footer from './Footer';
 const Help = () => {
  return (
   <>

       <div className='w-full h-screen flex'>
        <div className='grid grid-cols-1 md:grid-cols-2 m-auto h-[550px] shadow-lg shadow-gray-600 sm:max-w-[900px]'>
            <div className='w-full h-[550px] hidden md:block'>
                <img className='w-full h-full' src={Image} alt="/" />
            </div>
            <div className='p-4 flex flex-col justify-around'>
                <form>
                <h3 className='w-full text-xl sm:text-3xl font-normal text-[#F29727] pb-4'>
                     Join
                          <span className='text-[#F24C3D] font-tektur font-semibold'>Now</span>
                   </h3>
                     <div  className='flex flex-col'>
                     <input className='border p-2 my-2' type="text" placeholder='Name' />
                        <input className='border p-2 my-2' type="password" placeholder='Email' />
                        <textarea className='border p-2 my-2' placeholder='Address' ></textarea>
                     </div>
                    <div>
                        <input className='border p-2 mr-2' type="text" placeholder='Phone number' />
                        <input className='border p-2' type="password" placeholder='City' />
                    </div>
                    <button className='w-full text-[#fff] py-2 my-4 bg-[#22A699] hover:bg-[#22A699]'>Join Now</button>
                    <p className='text-center'>Join Our Cause: Be a Hunger Hero</p>
                </form>
                
            </div>
        </div>
    </div>
    <Footer/>
   </>
  )
}

export default Help;