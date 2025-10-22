import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";

export default function AuthDropdown({ user, setUser, onLogout, mobile }) {
  const [open, setOpen] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (mobile) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setWelcomeMsg("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  const handleGoogleLogin = async (response) => {
    const token = response.credential;

    try {
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      const data = await res.json();

      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setOpen(false);

        // Welcome message for new users
        if (data.isNew) {
          setWelcomeMsg(`🎉 Welcome, ${data.user.firstName || data.user.email}!`);
          setTimeout(() => setWelcomeMsg(""), 5000);
        }

        // Redirect to profile
        navigate("/profile");
      } else {
        alert("Google login failed");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google login failed");
    }
  };

  const renderAvatar = () => {
    if (user?.picture) {
      return (
        <img
          src={user.picture}
          alt={user.name}
          className="w-10 h-10 rounded-full border-2 border-white hover:border-yellow-400 transition-all duration-200"
        />
      );
    } else if (user?.firstName) {
      return (
        <div className="w-10 h-10 rounded-full bg-gray-500 text-white flex items-center justify-center font-medium text-lg">
          {user.firstName.charAt(0).toUpperCase()}
        </div>
      );
    } else {
      return <FaUserCircle className="text-2xl text-brand-text hover:text-brand-yellow" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 rounded-full ${
          mobile ? "bg-brand-light hover:bg-brand-light/70" : "hover:bg-brand-light/30"
        } transition-transform duration-200`}
      >
        {user ? renderAvatar() : <FaUserCircle className="text-2xl text-brand-text hover:text-brand-yellow" />}
      </button>

      {open && (
        <div
          className={`${
            mobile
              ? "mt-2 flex flex-col w-full space-y-2 p-3 bg-white rounded-lg shadow-lg animate-fadeIn"
              : "absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-3 animate-fadeIn z-50"
          }`}
        >
          {welcomeMsg && (
            <div className="bg-green-100 text-green-800 p-2 rounded-md text-sm text-center">
              {welcomeMsg}
            </div>
          )}

          {user ? (
            <>
              {!mobile && (
                <span className="font-medium text-center text-gray-700">
                  {user.name || user.email}
                </span>
              )}

              {/* ✅ New "Go to Profile" Button */}
              <button
                onClick={() => {
                  navigate("/profile");
                  setOpen(false);
                }}
                className="bg-brand-light text-gray-800 py-2 rounded-md hover:bg-gray-100 transition font-medium"
              >
                View Profile
              </button>

              <hr className="border-t border-gray-200" />

              <button
                onClick={() => {
                  localStorage.removeItem("jwt");
                  localStorage.removeItem("user");
                  setUser(null);
                  navigate("/");
                }}
                className="bg-brand-saffron text-white py-2 rounded-md hover:bg-yellow-500 transition font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={(err) => console.log("Google login error:", err)}
              className="w-full"
            />
          )}
        </div>
      )}
    </div>
  );
}
