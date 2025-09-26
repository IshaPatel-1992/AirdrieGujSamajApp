import { useState, useRef, useEffect } from "react";
import { FaUserCircle, FaApple, FaMicrosoft } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { msalInstance } from "../auth/msalConfig"; // path to msalConfig.js

export default function AuthDropdown({ user, setUser, onLogout, mobile }) {
  const [open, setOpen] = useState(false);
  const [manualForm, setManualForm] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  });

  const dropdownRef = useRef(null);

  // Close dropdown on outside click (desktop only)
  useEffect(() => {
    if (mobile) return;
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
        setManualForm(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [mobile]);

  // -------------------- Handlers --------------------

  // Google Login
  const handleGoogleLogin = async (response) => {
    const token = response.credential;
    const userInfo = jwtDecode(token);

    try {
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
        setOpen(false);
      } else {
        alert("Google login failed");
      }
    } catch (err) {
      console.error("Google login error:", err);
    }
  };

  // Microsoft Login
  const handleMicrosoftLogin = async () => {
    const loginRequest = { scopes: ["User.Read"] };
    try {
      const loginResponse = await msalInstance.loginPopup(loginRequest);
      const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: loginResponse.account,
      });
      const accessToken = tokenResponse.accessToken;

      const res = await fetch("http://localhost:5000/auth/microsoft", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ accessToken }),
      });
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setOpen(false);
      } else {
        alert("Microsoft login failed");
      }
    } catch (err) {
      console.error("Microsoft login error:", err);
      alert("Microsoft login failed");
    }
  };

  // Apple Login
  const handleAppleLogin = async () => {
    try {
      const response = await window.AppleID.auth.signIn();
      const idToken = response.authorization.id_token;

      const res = await fetch("http://localhost:5000/auth/apple", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      });
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setOpen(false);
      } else {
        alert("Apple login failed");
      }
    } catch (err) {
      console.error("Apple login error:", err);
      alert("Apple login failed");
    }
  };

  // Manual Login/Signup
  const handleManualSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/auth/manual", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        localStorage.setItem("user", JSON.stringify(data.user));
        setUser(data.user);
        setOpen(false);
        setManualForm(false);
      } else {
        alert(data.message || "Login/Signup failed");
      }
    } catch (err) {
      console.error("Manual login error:", err);
    }
  };

  // Initialize AppleID SDK
  useEffect(() => {
    if (window.AppleID) {
      window.AppleID.auth.init({
        clientId: process.env.REACT_APP_APPLE_CLIENT_ID,
        scope: "name email",
        redirectURI: window.location.origin + "/apple-callback",
        usePopup: true,
      });
    }
  }, []);

  // -------------------- UI --------------------
  const authButtonClass =
    "flex items-center justify-center w-full py-2 rounded-md text-white font-medium text-sm transition transform hover:scale-105";

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
          ) : manualForm ? (
            <form onSubmit={handleManualSubmit} className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                required
                className="border p-2 rounded-md"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                required
                className="border p-2 rounded-md"
              />
              <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                className="border p-2 rounded-md"
              />
              <button
                type="submit"
                className="bg-gray-800 text-white py-2 rounded-md hover:bg-gray-700 transition font-medium"
              >
                Continue
              </button>
              <button
                type="button"
                onClick={() => setManualForm(false)}
                className="text-sm text-gray-500 hover:underline"
              >
                Back
              </button>
            </form>
          ) : (
            <>
              {/* Google */}
              <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={(err) => console.log("Google login error:", err)}
                className="w-full"
              />

              {/* Microsoft */}
              <button
                className={`${authButtonClass} bg-[#0078D4] mt-2`}
                onClick={handleMicrosoftLogin}
              >
                <FaMicrosoft className="mr-2" /> Sign in with Microsoft
              </button>

              {/* Apple */}
              <button
                className={`${authButtonClass} bg-black mt-2`}
                onClick={handleAppleLogin}
              >
                <FaApple className="mr-2" /> Sign in with Apple
              </button>

              {/* Manual */}
              <button
                onClick={() => setManualForm(true)}
                className={`${authButtonClass} bg-gray-800 mt-2`}
              >
                Sign In / Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}
