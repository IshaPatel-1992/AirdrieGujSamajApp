import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo/Airdrie-Samaj-Logo-png.png";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import jwt_decode from 'jwt-decode';

{ /* import MicrosoftLogin from "react-microsoft-login";
import AppleLogin from "react-apple-login"; */ } 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership Info", path: "/membershipinfo" },
    { name: "Contact Us", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Google login success handler
  const handleGoogleLogin = (response) => {
    console.log("Google login response:", response);
  };

  { /* // Microsoft login success handler
  const handleMicrosoftLogin = (response) => {
    console.log("Microsoft login response:", response);
  };

  // Apple login success handler
  const handleAppleLogin = (response) => {
    console.log("Apple login response:", response);
  }; */ }

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-xl" : "shadow-lg"
        } bg-gradient-to-r from-brand-saffron to-brand-mint text-brand-text backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-[60px] w-auto hover:scale-105 transition-transform duration-300 drop-shadow-md"
          />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-4 items-center">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="px-3 py-1 rounded-md font-medium text-brand-text transition-all duration-300 hover:bg-brand-light/30 hover:font-bold hover:shadow-md hover:scale-105"
            >
              {item.name}
            </Link>
          ))}

          {/* Login / Signup */}
          <div className="flex items-center space-x-4">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={(error) => console.log("Google login error:", error)}
              useOneTap
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            />
            {/* <MicrosoftLogin
              clientId="YOUR_MICROSOFT_CLIENT_ID"
              onSuccess={handleMicrosoftLogin}
              onFailure={(error) => console.log("Microsoft login error:", error)}
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            />
            <AppleLogin
              clientId="YOUR_APPLE_CLIENT_ID"
              redirectURI="YOUR_REDIRECT_URI"
              onSuccess={handleAppleLogin}
              onFailure={(error) => console.log("Apple login error:", error)}
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            /> */ }
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-brand-text hover:text-brand-yellow transition"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-light/95 backdrop-blur-md rounded-md px-6 pt-4 pb-6 space-y-2 shadow-lg animate-scaleFade">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-1 rounded-md font-medium text-brand-text transition-all duration-300 hover:bg-brand-light/30 hover:font-bold hover:shadow-md hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Login / Signup */}
          <div className="flex flex-col items-center space-y-4 mt-4">
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={(error) => console.log("Google login error:", error)}
              useOneTap
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            />
            {/* <MicrosoftLogin
              clientId="YOUR_MICROSOFT_CLIENT_ID"
              onSuccess={handleMicrosoftLogin}
              onFailure={(error) => console.log("Microsoft login error:", error)}
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            />
            <AppleLogin
              clientId="YOUR_APPLE_CLIENT_ID"
              redirectURI="YOUR_REDIRECT_URI"
              onSuccess={handleAppleLogin}
              onFailure={(error) => console.log("Apple login error:", error)}
              className="text-brand-text hover:text-brand-yellow transition-all duration-300"
            /> */ }
          </div>
        </div>
      )}
    </header>
  );
}
