import React, { useState } from "react";
import Img from "../photos/p6.png"; 


import Footer from "../components/Footer";
const Donate = () => {
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
          <div className="w-4/5 mx-auto p-4 rounded shadow-2xl bg-gray-50 flex flex-col relative z-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center w-full">
              {/* Form Section */}
              <div className="w-full md:w-1/2 px-4 h-auto mb-4 md:mb-0">
                <div className="bg-white rounded shadow-lg p-6 h-full">
                  <h3 className="flex justify-center items-center w-full text-xl sm:text-3xl font-normal text-[#F29727]">
                    Nourish
                    <span className="text-[#F24C3D] font-tektur font-semibold">
                      Hope
                    </span>
                  </h3>
                  <h2 className="flex justify-center items-center text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                    Charity Donation Form
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
                            placeholder="Enter your email"
                            className="w-full border rounded px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Donate Amount
                          </label>
                          <input
                            type="number"
                            placeholder="Enter amount"
                            className="w-full border rounded px-3 py-2"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Credit Card Information
                          </label>
                          <input
                            type="text"
                            placeholder="Card Number"
                            className="w-full border rounded px-3 py-2 mb-2"
                          />
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="MM/YY"
                              className="w-1/2 border rounded px-3 py-2"
                            />
                            <input
                              type="text"
                              placeholder="CVC"
                              className="w-1/2 border rounded px-3 py-2"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Message
                          </label>
                          <textarea
                            placeholder="Write your message here"
                            className="w-full border rounded px-3 py-2"
                          ></textarea>
                        </div>
                        <button className="bg-[#F24C3D] flex justify-center items-center mr-4 text-white rounded mb-4 py-2 px-6 font-medium hover:bg-transparent hover:border-[#F24C3D] hover:text-[#F24C3D] duration-300 hover:border border border-transparent" onClick={handleSubmit}>
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
                    alt="Donation Illustration"
                    className="w-full max-w-md object-cover rounded"
                  />
                </div>
              </div>
            </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Donate;
