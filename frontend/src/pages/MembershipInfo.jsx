import React from "react";
import membershipVideo from "../assets/bgImages/shutterstock_3686983631.mp4"; // Replace with your video path

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
    <section className="relative w-full overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={membershipVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-mint/70 via-brand-cream/50 to-brand-saffron/70 z-10" />

      {/* Content */}
      <div className="relative z-20 p-6 sm:p-10 max-w-5xl mx-auto animate-fadeIn text-white">
        <h2 className="text-3xl sm:text-4xl font-heading font-bold tracking-wide text-center mb-10 drop-shadow-lg">
          Membership
        </h2>

        <p className="mb-6 text-lg leading-relaxed font-sans text-center drop-shadow-md">
          Join Airdrie Gujarati Samaj to celebrate tradition and unity. Your membership supports our cultural programs and events.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-center drop-shadow-md">
          Membership Options
        </h3>

        {/* Membership Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((m, i) => (
            <div
              key={i}
              className="relative bg-white/90 rounded-2xl p-6 shadow-xl border border-brand-mint hover:shadow-2xl transition transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden animate-fadeInUp"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 w-full h-2 bg-brand-saffron"></div>

              {/* Subtle background pattern */}
              <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/asanoha-400.png')]"></div>

              <div className="relative z-10 text-black">
                <h4 className="text-xl font-bold mb-3 text-center">{m.type}</h4>

                <p className="text-gray-800 text-sm leading-relaxed text-center mb-5">
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

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="mb-4 text-lg font-medium drop-shadow-md">
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

      {/* Fade-in keyframes */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp { animation: fadeInUp 0.8s ease forwards; }
        .animate-fadeIn { animation: fadeInUp 0.8s ease forwards; }
      `}</style>
    </section>
  );
}
