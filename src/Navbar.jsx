import React from 'react';
import Logo from './assets/Logo.png';


const Navbar = () => {
  return (
    <nav className="bg-[#121C20] text-white p-4 sm:px-10 border-t border-b border-white shadow-md">
      {/* Container for logo and links */}
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        {/* Left Side: Logo */}
<div className="flex items-center text-xl font-bold tracking-wider cursor-pointer">
  <img src={Logo} alt="Logo" className="w-8 h-8 mr-2 pb-1"/>
  <span>Predict Africa</span>
</div>


        {/* Right Side: Links and Button */}
        <div className="hidden sm:flex items-center space-x-4">

          {/* Navigation Links with hover background */}
          <a 
            href="/markets" 
            className="text-gray-300 text-base px-3 py-2 rounded-lg 
                       hover:bg-gray-700 hover:text-white transition duration-200"
          >
            Markets
          </a>
          <a 
            href="/create" 
            className="text-gray-300 text-base px-3 py-2 rounded-lg 
                       hover:bg-gray-700 hover:text-white transition duration-200"
          >
            Create
          </a>
          <a 
            href="/portfolio" 
            className="text-gray-300 text-base px-3 py-2 rounded-lg 
                       hover:bg-gray-700 hover:text-white transition duration-200"
          >
            Portfolio
          </a>

          {/* Sign Up Button with hover background */}
          <button className="text-gray-300 text-base px-4 py-2 rounded-lg 
                             hover:bg-gray-700 hover:text-white transition duration-200">
            Sign up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          {/* Hamburger icon goes here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
