import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-[#d43426] text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Helping Hands</h3>
            <p className="text-sm">
              Extending a hand to build a stronger, united community through food and care.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm space-y-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/about" className="hover:underline">Our Mission</Link></li>
              <li><Link to="/about" className="hover:underline">Programs</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Support</h3>
            <ul className="text-sm space-y-1">
              <li><Link to="/donate" className="hover:underline">Donate</Link></li>
              <li><Link to="/join" className="hover:underline">Volunteer</Link></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">🌐</a>
              <a href="#" className="hover:text-gray-300">🐦</a>
              <a href="#" className="hover:text-gray-300">📘</a>
              <a href="#" className="hover:text-gray-300">📸</a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-sm text-center">
          &copy; {new Date().getFullYear()} Helping Hands. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
