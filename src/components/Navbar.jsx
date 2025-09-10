import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import logo from "../assets/logo/Airdrie-Samaj-Logo-png.png";
import { FaBars, FaTimes, FaUserCircle } from "react-icons/fa";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loginDropdown, setLoginDropdown] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Events", path: "/events" },
    { name: "Gallery", path: "/gallery" },
    { name: "Membership Info", path: "/membershipinfo" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setLoginDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Google login success
  const handleGoogleLogin = async (response) => {
    const token = response.credential;
    const userInfo = jwtDecode(token);
    console.log("Google user info:", userInfo);

    // Send token to backend
    const res = await fetch("http://localhost:5000/auth/google", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token }),
    });

    const data = await res.json();

    if (data.jwt) {
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      setUser(data.user);
      alert(`Welcome, ${data.user.name}!`);
      setLoginDropdown(false);
    } else {
      alert("Login failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("user");
    setUser(null);
    setLoginDropdown(false);
    navigate("/"); // redirect home after logout
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? "shadow-xl" : "shadow-lg"} bg-gradient-to-r from-brand-saffron to-brand-mint text-brand-text backdrop-blur-md`}>
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

          {/* Profile Icon / Avatar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setLoginDropdown(!loginDropdown)}
              className="p-1 rounded-full hover:bg-brand-light/30 transition-transform duration-200"
            >
              {user ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-yellow-400 transition-all duration-200"
                />
              ) : (
                <FaUserCircle className="text-2xl text-brand-text hover:text-brand-yellow transform transition-transform duration-200 hover:scale-110" />
              )}
            </button>

            {loginDropdown && (
              <div className="absolute right-0 mt-2 w-60 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-3 animate-fadeIn z-50">
                {user ? (
                  <>
                    <span className="font-medium text-center">{user.name}</span>
                    <button
                      onClick={handleLogout}
                      className="bg-brand-saffron text-white py-2 rounded-md hover:bg-yellow-500 transition"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <GoogleLogin
                      onSuccess={handleGoogleLogin}
                      onError={(err) => console.log("Google login error:", err)}
                      className="w-full"
                    />
                    {/* Microsoft / Apple buttons can go here */}
                  </>
                )}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-brand-text hover:text-brand-yellow transition-transform duration-200"
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

          {/* Mobile Login / Profile */}
          <div className="flex flex-col items-center space-y-4 mt-4">
            <button
              onClick={() => setLoginDropdown(!loginDropdown)}
              className="p-2 rounded-full bg-brand-light hover:bg-brand-light/70 transition-transform duration-200"
            >
              {user ? (
                <img
                  src={user.picture}
                  alt={user.name}
                  className="w-10 h-10 rounded-full border-2 border-white hover:border-yellow-400 transition-all duration-200"
                />
              ) : (
                <FaUserCircle className="text-2xl transform transition-transform duration-200 hover:scale-110" />
              )}
            </button>
            {loginDropdown && (
              <div className="flex flex-col w-full space-y-2 p-2 bg-white rounded-lg shadow-lg animate-fadeIn">
                {user ? (
                  <button
                    onClick={handleLogout}
                    className="bg-brand-saffron text-white py-2 rounded-md hover:bg-yellow-500 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <GoogleLogin
                    onSuccess={handleGoogleLogin}
                    onError={(err) => console.log(err)}
                    className="w-full"
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
