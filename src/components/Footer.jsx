import React from 'react';
import logo from '../assets/logo/Airdrie-Samaj-Logo-png.png';

export default function Footer() {
  return (
    <footer className="bg-brand-light text-brand-text py-6 font-sans border-t border-brand hover:border-brand-yellow transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-brand-yellow px-3 py-2 rounded-lg shadow-md flex items-center">
            <img
              src={logo}
              alt="Airdrie Samaj Logo"
              className="h-[60px] w-auto drop-shadow-sm"
            />
          </div>
        </div>

        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <a href="#privacy" className="hover:text-brand-yellow transition">Privacy</a>
          <a href="#terms" className="hover:text-brand-yellow transition">Terms</a>
          <a href="#contactus" className="hover:text-brand-yellow transition">Contact</a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-brand-text/80 text-center md:text-right">
          &copy; {new Date().getFullYear()} Airdrie Gujarati Samaj. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
