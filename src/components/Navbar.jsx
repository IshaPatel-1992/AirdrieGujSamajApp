import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo/Airdrie-Samaj-Logo-png.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership Info", path: "/membershipinfo" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <header className="bg-brand-light bg-opacity-90 backdrop-blur-md text-brand-text shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <div className="bg-brand-yellow px-3 py-2 rounded-lg shadow-md flex items-center">
            <img src={logo} alt="Logo" className="h-[60px] w-auto drop-shadow-sm" />
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="text-lg font-medium font-serif text-brand-text hover:text-brand-yellow transition-all duration-300 hover:underline underline-offset-4"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-brand-text hover:text-brand-yellow transition"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-light bg-opacity-95 backdrop-blur-md px-6 pt-4 pb-6 space-y-4 shadow-md animate-fadeIn">
          {menuItems.map(item => (
            <Link
              key={item.name}
              to={item.path}
              className="block text-lg font-medium font-serif text-brand-text hover:text-brand-yellow transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
