import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../assets/logo/Airdrie-Samaj-Logo-png.png";
import { FaBars, FaTimes } from "react-icons/fa";
import AuthDropdown from "./AuthDropdown";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership Info", path: "/membershipinfo" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Load user on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  // Add shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-xl" : "shadow-md"
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
          {/* Auth */}
          <AuthDropdown user={user} setUser={setUser} onLogout={handleLogout} />
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-brand-text hover:text-brand-yellow transition-transform duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-light/95 backdrop-blur-md rounded-md px-6 pt-4 pb-6 space-y-4 shadow-lg animate-scaleFade">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="block px-3 py-2 rounded-md font-medium text-brand-text transition-all duration-300 hover:bg-brand-light/40 hover:font-bold hover:shadow-md hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}

          {/* Mobile Auth */}
          <div className="flex justify-center mt-4">
            <AuthDropdown
              user={user}
              setUser={setUser}
              onLogout={handleLogout}
              mobile
            />
          </div>
        </div>
      )}
    </header>
  );
}
