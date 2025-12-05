import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSuccess = async (credentialResponse) => {
    const token = credentialResponse?.credential;
    if (!token) return alert("No token returned from Google");

    try {
      const res = await fetch("http://localhost:5000/api/auth/google", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      // Parse JSON safely
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error("Login failed:", data);
        alert(data.message || "Login failed");
        return;
      }

      // Success → store JWT and navigate
      localStorage.setItem("authToken", data.token);
      console.log("Login success:", data);
      navigate("/dashboard");  // or your dashboard route

    } catch (err) {
      console.error("Frontend error:", err);
      alert("Login failed: network or server error");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Login with Google</h2>
      <GoogleLogin onSuccess={handleSuccess} onError={() => alert("Login failed")} />
    </div>
  );
}

export default Login;
