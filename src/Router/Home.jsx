import React from 'react';
import Img from "../photos/p3.png";
import pic from "../photos/p5.jpg"
import ser1 from "../photos/m1.jpg"
import ser2 from "../photos/m2.jpg"
import ser3 from "../photos/m3.jpg"
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <section className='bg-[#ffd65d] py-[4%] relative overflow-hidden'>
                {/* Semi-circle for top-left */}
                <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-[#F24C3D] rounded-full"></div>

                {/* Semi-circle for top-right */}
                <div className="absolute top-[20px] right-[150px] w-[300px] h-[300px] bg-[#F24C3D] rounded-full"></div>

                {/* Semi-circle for bottom-right */}
                <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#F24C3D] rounded-full"></div>

                {/* Semi-circle for bottom-left */}
                <div className="absolute bottom-[10px] left-[150px] w-[300px] h-[300px] bg-[#F24C3D] rounded-full"></div>

                <div className='w-5/6 mx-auto p-4 rounded shadow-2xl h-full bg-gray-50 flex flex-col relative z-10'>
                    <div>
                        <Navbar />
                    </div>
                    <div className='flex flex-col-reverse md:flex-row items-center justify-center'>
                        <div className='md:w-1/2 w-full p-4 m-2'>
                            <h1 className='text-3xl sm:text-4xl font-medium font-tektur text-[#F2BE22] md:text-4xl'>
                                Share a Meal, Spread the Love:
                            </h1>
                            <h2 className='text-[#F24C3D] text-xl font-normal py-4 md:text-3xl'>
                                Together, We Can End Hunger
                            </h2>
                            <p className='text-sm md:text-base'>
                                Join us in fighting hunger and spreading hope through the simple act of food donation. Your generosity can make a lasting difference in someone's life.
                            </p>
                            <div className='mt-6 md:mt-10 sm:space-x-4'>
                                <Link to='./donate'>
                                    <button className='bg-[#F24C3D] mr-4 text-white rounded mb-4 py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent'>
                                        Donate Now
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className='md:w-1/2 w-full p-4 m-2'>
                            <img src={Img} alt="" className='w-full h-full' />
                        </div>
                    </div>
                </div>
            </section>


            <div className='max-w-[99%] lg:max-w-[90%] md:mx-auto px-4 flex flex-col-reverse md:flex-row my-8 items-center justify-center'>

                <div className='md:w-1/2 w-full'>
                    <img
                        src={pic}
                        alt="Food Donation"
                        className="w-full h-full pr-6"
                    />
                </div>

                <div className='md:mt-10 md:w-1/2'>
                    <h1 className='text-xl sm:text-2xl md:text-3xl pb-4 text-[#22A699]'>About</h1>
                    <h1 className='text-xl sm:text-2xl md:text-3xl pb-3 font-medium font-tektur text-[#F2BE22]'>
                        Fueling Change: Our Story in Nourishing Communities
                    </h1>
                    <ul className='text-sm sm:text-lg'>
                        <li className='pb-4'> ⭐ Directly Connects Surplus Food to Needy</li>
                        <li className='pb-4'> ⭐ Empowering Generosity for Hunger Alleviation</li>
                        <li className='pb-4'> ⭐ Tech-Driven, Simple Online Donations Platform</li>
                        <li className='pb-4'> ⭐ Community Collaboration: Sharing Meals, Changing Lives</li>
                    </ul>
                    <p className='text-sm md:text-base'>
                        {/* Additional content if needed */}
                    </p>
                    <div className='mt-6 md:mt-10 space-x-4'>
                        <Link
                            to='/about'
                            className='bg-[#22A699] text-white rounded py-2 px-6 font-medium inline-block hover:bg-transparent hover:border-[#22A699] hover:text-[#22A699] duration-300 hover:border border border-transparent'
                        >
                            About Us
                        </Link>
                        <Link
                            to='/join'
                            className='rounded py-2 px-6 font-medium inline-block bg-transparent border-[#22A699] text-[#22A699] duration-300 border border border-transparent'
                        >
                            Join Now
                        </Link>
                    </div>
                </div>

            </div>


            <div className='max-w-[99%] lg:max-w-[90%] md:mx-auto mx-6 my-8'>
                <div className='text-center'>
                    <h1 className='text-[#F24C3D] text-2xl sm:text-4xl px-3 py-2'>Extending a Hand <span className='text-[#F24C3D] '> Our Guiding Mission </span></h1>
                    <p className='text-xl font-normal '>Uniting Communities Through Extended Helping Hands.</p>
                </div>

                <div className='flex flex-col md:flex-row items-center justify-center my-8'>
                    <div className='w-[99%] md:w-96 mx-6 my-8'>
                        <img src={ser1} alt="" className='w-full md:w-[80%]' />
                        <h1 className='text-xl md:text-2xl text-[#F29727] font-semibold mt-4'>Meal Programs</h1>
                        <p className='text-base md:text-lg mt-2'>
                            Providing hot meals to homeless shelters, schools, or community centers to ensure everyone has access to nutritious food.
                        </p>
                    </div>

                    <div className='w-[99%] md:w-96 mx-6 my-8'>
                        <img src={ser2} alt="" className='w-full md:w-[80%]' />
                        <h1 className='text-xl md:text-2xl text-[#F29727] font-semibold mt-4'>Food Drives</h1>
                        <p className='text-base md:text-lg mt-2'>
                            Organizing community-wide campaigns to collect non-perishable food items for distribution to those in need.
                        </p>
                    </div>

                    <div className='w-[99%] md:w-96 mx-6 my-8'>
                        <img src={ser3} alt="" className='w-full md:w-[80%]' />
                        <h1 className='text-xl md:text-2xl text-[#F29727] font-semibold mt-4'>Donation Matching</h1>
                        <p className='text-base md:text-lg mt-2'>
                            Encouraging businesses and individuals to match donations, amplifying the impact of every contribution.
                        </p>
                    </div>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default Home;
