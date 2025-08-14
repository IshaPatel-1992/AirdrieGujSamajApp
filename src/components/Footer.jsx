import React from 'react';
import logo from '../assets/logo/Airdrie-Samaj-Logo-png.png';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-teal-950 via-teal-900 to-teal-800 text-gray-300 py-6 font-raleway border-t border-teal-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo and Company Name 
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Janvi Technologies" className="w-10 h-10 object-contain" />
          <span className="text-lg font-semibold text-white">Janvi Technologies</span>
        </div> */}

        {/* Links */}
        <div className="flex space-x-6 text-sm">
          <a href="#privacy" className="hover:text-white transition">Privacy</a>
          <a href="#terms" className="hover:text-white transition">Terms</a>
          <a href="#contactus" className="hover:text-white transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Janvi Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
