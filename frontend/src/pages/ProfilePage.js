// src/pages/ProfilePage.js
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Welcome, {user.firstName} {user.lastName}</h2>
      <img src={user.picture} alt="profile" width="100" style={{ borderRadius: "50%" }} />

      <p>Email: {user.email}</p>
      <p>Membership Status: {user.membershipStatus}</p>

      <button 
        onClick={() => window.location.href = "/membershipformnew"}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        {user.membershipStatus === "active" ? "Renew Membership" : "Buy Membership"}
      </button>
    </div>
  );
}
