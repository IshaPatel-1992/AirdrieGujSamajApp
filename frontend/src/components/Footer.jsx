import React from 'react';
import logo from '../assets/logo/Airdrie-Samaj-Logo-png.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-saffron to-brand-mint py-6 font-sans border-t border-white/20 backdrop-blur-md">
  <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">

    {/* Logo */}
    <Link to="/" className="flex items-center justify-center md:justify-start">
      <img
        src={logo}
        alt="Logo"
        className="h-[60px] w-auto hover:scale-105 transition-transform duration-300 drop-shadow-md"
      />
    </Link>

    {/* Social Links */}
    <div className="flex justify-center space-x-4">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-600 transition-colors duration-300">
        <FaFacebookF size={20} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-pink-500 transition-colors duration-300">
        <FaInstagram size={20} />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-700 transition-colors duration-300">
        <FaLinkedinIn size={20} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-400 transition-colors duration-300">
        <FaTwitter size={20} />
      </a>
    </div>

    {/* Copyright */}
    <div className="text-sm md:text-base text-gray-900 font-medium text-center md:text-right leading-snug drop-shadow-sm">
      &copy; {new Date().getFullYear()} Airdrie Gujarati Samaj. <br />
      All rights reserved.
    </div>
  </div>
</footer>

  );
}
