import { useState, useRef, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

export default function AuthDropdown({ user, setUser, onLogout, mobile }) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click (desktop only)
  useEffect(() => {
    if (mobile) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  // -------------------- Google Login --------------------
  const handleGoogleLogin = async (response) => {
    const token = response.credential;
    const userInfo = jwtDecode(token);

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
      } else {
        alert("Google login failed");
      }
    } catch (err) {
      console.error("Google login error:", err);
      alert("Google login failed");
    }
  };

  // -------------------- UI --------------------
  return (
    <div className="relative" ref={dropdownRef}>
      {/* Avatar / Icon */}
      <button
        onClick={() => setOpen(!open)}
        className={`p-2 rounded-full ${
          mobile ? "bg-brand-light hover:bg-brand-light/70" : "hover:bg-brand-light/30"
        } transition-transform duration-200`}
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

      {/* Dropdown */}
      {open && (
        <div
          className={`${
            mobile
              ? "mt-2 flex flex-col w-full space-y-2 p-3 bg-white rounded-lg shadow-lg animate-fadeIn"
              : "absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-lg flex flex-col p-4 space-y-3 animate-fadeIn z-50"
          }`}
        >
          {user ? (
            <>
              {!mobile && <span className="font-medium text-center">{user.name}</span>}
              <button
                onClick={onLogout}
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
