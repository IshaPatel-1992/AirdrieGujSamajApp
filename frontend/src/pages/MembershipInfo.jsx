import React from "react";

export default function MembershipInfo() {
  const memberships = [
    {
      type: "Family Membership",
      amount: "$40",
      description: "Includes parents and children under 18 years living in the same household.",
    },
    {
      type: "Single Adult Membership",
      amount: "$30",
      description: "For individual adults (18+).",
    },
    {
      type: "Student Membership",
      amount: "$20",
      description: "For full-time students with valid student ID.",
    },
    {
      type: "Senior Couple Membership",
      amount: "$25",
      description: "Includes two seniors (65+).",
    },
    {
      type: "Family Members - One Adult and Children under 18 years",
      amount: "$25",
      description: "Single parent with children under 18 years.",
    },
    {
      type: "Senior Single Membership",
      amount: "$15",
      description: "For a single senior (65+).",
    },
  ];

  return (
    <div
      id="membershipinfo"
      className="p-6 sm:p-10 max-w-5xl mx-auto animate-fadeIn text-brand"
    >
      <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center text-brand mb-10">
        Membership
      </h2>

      <p className="mb-6 text-lg leading-relaxed font-sans text-gray-700 text-center">
        Join Airdrie Gujarati Samaj to celebrate tradition and unity. Your membership supports our cultural programs and events.
      </p>

      <h3 className="text-2xl font-semibold mb-6 text-brand text-center">
        Membership Options
      </h3>

      {/* ✅ FIXED Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {memberships.map((m, i) => (
          <div
            key={i}
            className="relative bg-white rounded-2xl p-6 shadow-xl border border-brand-mint hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden"
          >
            {/* Decorative top bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-brand-saffron"></div>

            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asanoha-400.png')]" />

            <div className="relative z-10">
              <h4 className="text-xl font-bold text-brand mb-3 text-center">
                {m.type}
              </h4>

              <p className="text-gray-700 text-sm leading-relaxed text-center mb-5">
                {m.description}
              </p>

              <div className="flex justify-center mt-4">
                <span className="bg-brand-mint text-brand font-bold px-5 py-2 rounded-full shadow-md text-lg">
                  {m.amount}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ✅ Bottom CTA */}
      <div className="text-center mt-12">
        <p className="mb-4 text-lg font-medium text-brand">
          Ready to join? Membership registration starts March 2026
        </p>
        <a
          href="/contact?from=membership"
          className="inline-block w-full sm:w-auto bg-yellow-500 hover:bg-yellow-400 hover:scale-105 transform transition duration-300 text-white font-semibold px-8 py-3 rounded-full shadow-lg"
        >
          Notify Me 📩
        </a>
      </div>
    </div>
  );
}
