import React from 'react';
import logo from '../assets/logo/Airdrie-Samaj-Logo-png.png';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-saffron to-brand-mint text-brand-text py-6 font-sans border-t border-white/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] w-auto hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
        </Link>

        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <Link
            to="/privacy"
            className="px-3 py-1 rounded-md transition-all duration-300 hover:bg-brand-light/30 hover:font-bold hover:shadow-md hover:scale-105"
          >
            Privacy
          </Link>
          <Link
            to="/terms"
            className="px-3 py-1 rounded-md transition-all duration-300 hover:bg-brand-light/30 hover:font-bold hover:shadow-md hover:scale-105"
          >
            Terms
          </Link>
          <Link
            to="/contact"
            className="px-3 py-1 rounded-md transition-all duration-300 hover:bg-brand-light/30 hover:font-bold hover:shadow-md hover:scale-105"
          >
            Contact
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-white/80 text-center md:text-right">
          &copy; {new Date().getFullYear()} Airdrie Gujarati Samaj. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
