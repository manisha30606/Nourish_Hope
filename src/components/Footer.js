import React from 'react';
import {Link} from "react-router-dom";



 const Footer = () => {
  return (
    <>
     <div className="footer bg-[#F24C3D] ">
      <div className="footermenu flex flex-col sm:flex-row self-start justify-self-start sm:justify-center sm:items-center pt-3">
        <div className="footerlogo max-w-1xl w-50% sm:mb-2 mb-4 mr-20"> 
          <h1 className='text-[#fff] font-medium text-2xl '>NourishHope</h1>
          <p className=' text-xl'> Share a Meal, Spread the Love: <br/>Together, We Can End Hunger</p>
       
        <div className="footericon text-[#fff] text-2xl m-2 cursor-pointer">
        <i className="uil uil-youtube p-2"/>
        <i className="uil uil-facebook p-2"/>
        <i className="uil uil-instagram p-2"/>
        <i className="uil uil-twitter p-2"/>
        </div>
         </div>
        

         <div className='flex flex-row'>
        <div className='w-30% mx-6 text-center'>
          <h2 className='text-xl font-medium text-[#fff]'>About Us</h2>
           <div className='flex flex-col'>
           <Link
              to='/'
              className=' mr-4 text-white   py-2  font-medium inline-block '
            >
             Home 
            </Link>
            <Link
              to='/about'
              className=' mr-4 text-white   py-2 font-medium inline-block '
            >
              About
            </Link>
            <Link
              to='/help'
              className=' mr-4 text-white  py-2 font-medium inline-block '
            >
             How to Help 
            </Link>
           </div>
        </div>

        <div className='w-30% mx-6 text-center'>
          <h2 className='text-xl font-medium text-[#fff]'>Contribution</h2>
           <div className='flex flex-col'>
           <Link
              to='/donate'
              className=' mr-4 text-white   py-2  font-medium inline-block '
            >
             Donate 
            </Link>
            <Link
              to='/join'
              className=' mr-4 text-white   py-2 font-medium inline-block '
            >
             Join
            </Link>
           
           </div>
        </div>

        <div className='w-30% mx-6 text-center'>
          <h2 className='text-xl font-medium text-[#fff]'>Get in touch</h2>
           <div className='flex flex-col'>
           <Link
              to='/contact'
              className=' mr-4 text-white   py-2  font-medium inline-block '
            >
             Contact 
            </Link>
            
           </div>
        </div>
      </div>
      </div>

     
     </div>


    </>
  )
  }

export default Footer;