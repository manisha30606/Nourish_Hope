import React, { useState } from "react";
import Img from "../photos/p7.jpg"; 


import Footer from "../components/Footer";

const Join = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <>
    <div className="min-h-screen overflow-y-auto">
      <section className="bg-[#ffd65d] py-[3%] relative overflow-hidden min-h-screen">
        {/* Decorative semi-circles */}
        <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-[#F24C3D] rounded-full"></div>
        <div className="absolute top-[20px] right-[150px] w-[300px] h-[300px] bg-[#F24C3D] rounded-full"></div>
        <div className="absolute bottom-[-100px] right-[-100px] w-[250px] h-[250px] bg-[#F24C3D] rounded-full"></div>
        <div className="absolute bottom-[10px] left-[150px] w-[300px] h-[300px] bg-[#F24C3D] rounded-full"></div>

        {/* Content box */}
        <div className="sm:w-4/5 w[96%] mx-auto p-4 rounded shadow-2xl bg-gray-50 flex flex-col relative z-10">
          <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
            {/* Form Section */}
            <div className="w-full md:w-1/2 px-4 h-auto mb-4 md:mb-0">
              <div className="bg-white rounded shadow-lg p-6 h-full">
                <h3 className="flex justify-center items-center w-full text-xl sm:text-3xl font-normal text-[#F29727]">
                  Collaborate
                  <span className="text-[#F24C3D] font-tektur font-semibold ml-1">
                    Together
                  </span>
                </h3>
                <h2 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  Join Our Mission
                </h2>

                <div className="h-[540px] flex items-center justify-center">
                    {submitted ? (
                      <div className="text-green-600 text-center text-xl font-semibold">
                        Thank you! We will contact you soon.
                      </div>
                    ) : (




                      <form className="space-y-4 w-full" onSubmit={handleSubmit}>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="Enter your email"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Your Role/Interest
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="What role are you interested in?"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Organization/Company (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="If applicable, enter your organization"
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        How Can You Contribute?
                      </label>
                      <textarea
                        placeholder="Describe how you can contribute"
                        className="w-full border rounded px-3 py-2"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="bg-[#F24C3D] flex justify-center items-center mr-4 text-white rounded mb-4 py-2 px-6 font-medium hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full md:w-1/2 px-4 flex justify-center mb-4 md:mb-0">
              <img
                src={Img}
                alt="Collaboration Illustration"
                className="w-full max-w-md object-cover rounded"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
    
    <Footer/>


    </>
  );
};

export default Join;
