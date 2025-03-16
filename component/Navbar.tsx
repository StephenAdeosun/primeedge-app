"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-center  ">
      <div className="bg-gray-100 border border-gray-200 rounded-2xl px-8 py-3 flex items-center justify-between w-[95%] max-w-[650px] mt-6">
        {/* Logo */}
        <div>
          <h2 className="text-purple-700 text-xl font-semibold flex items-center justify-center space-x-2">
            <span className="rounded-full border-2 border-purple-700 w-6 h-6 flex items-center justify-center">
              <svg className="w-4 h-4 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15V9a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 9v6a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 1-1.73z"/>
              </svg>
            </span>
            <span>PrimeEdge</span>
          </h2>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-[14px] font-[500] text-gray-600">
          <a href="#services" className="hover:text-purple-600">Solutions</a>
          <a href="#how-it-works" className="hover:text-purple-600">How it works</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
        </div>

        {/* Book a Demo Button */}
        <div className="hidden md:flex">
          <button className="bg-purple-600 cursor-pointer text-white max-w-[120px] text-sm px-4 py-2 rounded-xl hover:bg-purple-700 transition">
            Book a Demo
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-gray-800" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[95%] max-w-[1200px] bg-white shadow-md rounded-2xl flex flex-col items-center py-4 space-y-4 md:hidden">
          <a href="#services" className="hover:text-purple-600">Solutions</a>
          <a href="#how-it-works" className="hover:text-purple-600">How it works</a>
          <a href="#contact" className="hover:text-purple-600">Contact</a>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-xl hover:bg-purple-700 transition">
            Book a Demo
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
