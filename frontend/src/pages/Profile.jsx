// Fetch profile
const fetchProfile = async () => {
  const token = localStorage.getItem("authToken");
  const res = await fetch("http://localhost:5000/api/user/profile", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await res.json();
  console.log("User profile:", data);
};

// Update membership
const updateMembership = async () => {
  const token = localStorage.getItem("authToken");
  const res = await fetch("http://localhost:5000/api/user/membership", {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ plan: "Family Membership", duration: 12 }),
  });
  const data = await res.json();
  console.log("Membership updated:", data);
};
