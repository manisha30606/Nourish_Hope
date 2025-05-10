import React, { useState } from "react";


import Footer from "../components/Footer";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
    <div className="min-h-screen bg-[#ffd65d] flex items-center justify-center py-10 px-4">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-2xl p-6 md:p-10 relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[-60px] left-[-60px] w-[150px] h-[150px] bg-[#F24C3D] rounded-full opacity-20 z-0"></div>
        <div className="absolute bottom-[-60px] right-[-60px] w-[150px] h-[150px] bg-[#F24C3D] rounded-full opacity-20 z-0"></div>

        <div className="relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-[#F29727] mb-2">
            Get in Touch
          </h1>
          <p className="text-center text-gray-600 text-sm md:text-base mb-8">
            We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
          </p>

          {submitted ? (
            <div className="text-center text-green-600 text-xl font-semibold">
              Thank you for contacting us! We will reach out to you soon.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F29727]"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F29727]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F29727]"
                  placeholder="Subject of your message"
                />
              </div>

              <div className="col-span-1 md:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="w-full mt-1 border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#F29727]"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <div className="col-span-1 md:col-span-2 flex justify-center">
                <button
                  type="submit"
                  className="bg-[#F24C3D] text-white font-medium px-6 py-2 rounded hover:bg-transparent hover:text-[#F24C3D] hover:border hover:border-[#F24C3D] duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
