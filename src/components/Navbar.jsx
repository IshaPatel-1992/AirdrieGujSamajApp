import React, { useState } from 'react';
import logo from '../assets/logo/Airdrie-Samaj-Logo-png.png';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ['Home', 'About', 'Services', 'Contact Us'];

  return (
    <header className="bg-white bg-opacity-80 backdrop-blur-md text-teal-700 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Janvi Technologies Logo"
            className="h-[80px] w-auto drop-shadow-md"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="text-lg font-medium font-serif hover:text-teal-500 transition-all duration-300 hover:underline underline-offset-4"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-teal-700 hover:text-teal-500 transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white bg-opacity-95 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 shadow-md">
          {menuItems.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/\s/g, '')}`}
              className="block text-lg font-medium font-serif text-teal-700 hover:text-teal-500 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
