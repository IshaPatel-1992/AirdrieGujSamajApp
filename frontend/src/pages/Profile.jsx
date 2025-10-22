import React, { useEffect, useState } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user) return <p className="text-center py-20 text-gray-500">Loading your profile...</p>;

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "?");

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white py-10 px-6 sm:px-10 animate-fadeIn">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-200">
        {/* Header Section */}
        <div className="bg-yellow-500 text-white text-center py-8 relative">
          {user.picture ? (
            <img
              src={user.picture}
              alt={user.firstName}
              className="w-32 h-32 rounded-full border-4 border-white shadow-md mx-auto mb-4 object-cover"
            />
          ) : (
            <div className="w-32 h-32 rounded-full bg-white text-yellow-500 flex items-center justify-center text-5xl font-bold mx-auto mb-4">
              {getInitial(user.firstName || user.email)}
            </div>
          )}
          <h2 className="text-3xl font-bold">{user.firstName} {user.lastName}</h2>
          <p className="text-white/90 text-lg">{user.email}</p>
        </div>

        {/* Info Section */}
        <div className="p-8 sm:p-10 text-center">
          <h3 className="text-2xl font-semibold mb-6 text-gray-800">Membership Details</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <p className="text-gray-600 font-medium mb-2">Membership Status</p>
              <p
                className={`text-lg font-semibold ${
                  user.membershipStatus === "active" ? "text-green-600" : "text-red-500"
                }`}
              >
                {user.membershipStatus?.toUpperCase() || "NOT ACTIVE"}
              </p>
            </div>

            <div className="bg-yellow-50 p-5 rounded-xl border border-yellow-100">
              <p className="text-gray-600 font-medium mb-2">Member Since</p>
              <p className="text-lg font-semibold text-gray-800">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A"}
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/membershipformnew"
              className="bg-yellow-500 hover:bg-yellow-400 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
            >
              {user.membershipStatus === "active" ? "Renew Membership" : "Buy Membership"}
            </a>

            <a
              href="/membershipinfo"
              className="bg-white border-2 border-yellow-400 text-yellow-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-50 hover:scale-105 transition-transform duration-300"
            >
              View Membership Info
            </a>

            <a
              href="/events"
              className="bg-gray-100 border-2 border-gray-200 text-gray-700 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-200 hover:scale-105 transition-transform duration-300"
            >
              Upcoming Events
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
